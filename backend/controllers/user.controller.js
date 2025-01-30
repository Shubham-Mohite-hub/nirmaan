import bcrypt from "bcrypt";
import User from "../models/user.js";
import { generateTokenAndSaveInCookies } from "../jwt/token.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const signup = async (req, res) => {
  const { username, email, password, confirmPassword, gender } = req.body;

  // Validate password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      gender,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = generateTokenAndSaveInCookies(newUser._id, res);

    // Send response with token
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateTokenAndSaveInCookies(user._id, res);
    res.status(200).json({ message: "User logged in successfully", user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging user" });
  }
};

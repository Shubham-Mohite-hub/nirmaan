import bcrypt from "bcrypt"


const signup = async (req, res) => {
    const { username, email, password, gender } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'User already exists' });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        gender,  // Include gender in user creation
      });
  
      await newUser.save();
  
      const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });
  
      res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirconfirmPassword: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // You can restrict the gender values to these options or leave it flexible
    required: true, // You can make this optional if needed
  }
});

const User = mongoose.model('User', UserSchema);

export default User;

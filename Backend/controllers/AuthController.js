import user from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const Register = async (req, res) => {
    try {
      const exist = await user.findOne({ email: req.body.email });
  
      if (exist) {
        return res.status(400).json({
          success: false,
          msg: "User Found, Please Log In"
        });
      }
  
      const salt = await bcrypt.genSalt(10); // Generate a unique salt
      const hashedPassword = await bcrypt.hash(req.body.password, salt); // Hash the password with the salt
  
      const newUser = await user.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
  
      return res.status(201).json({
        success: true,
        msg: 'Register Success',
        newUser,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };
  export const Login = async (req, res) => {
    try {
      const existingUser = await user.findOne({ email: req.body.email });
  
      if (!existingUser) {
        return res.status(400).json({
          success: false,
          msg: "User Not Found. Please Register",
        });
      }
  
      const isPasswordMatch = await bcrypt.compare(req.body.password, existingUser.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({
          success: false,
          msg: "Password Incorrect",
        });
      }
  
      const token = jwt.sign({ id: existingUser._id }, process.env.Secret, {
        expiresIn: '1d',
      });

      res.cookie('jwt',token)
  
      return res.status(200).json({
        success: true,
        msg: 'Login Success',
        token,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };
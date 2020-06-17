const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
/**
 * user registration
 */
const registerUser = async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const location = req.body.location;
  /**
   * find email id Exists or not
   */
  const findUser = await userModel.findOne({ email: email });
  if (findUser) {
    res.status(404).json({
      message: "Email Already Exists",
    });
  } else {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = new userModel({
      userName: userName,
      email: email,
      password: hashPassword,
      location: location,
    });

    try {
      const result = await user.save();
      res.status(201).json({
        message: "User Created Successfully",
        result,
      });
    } catch (error) {
      res.status(201).json({
        message: "User Creation Failed ",
      });
    }
  }
};
/**
 * user login function
 */
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    /**
     * find user exists or not
     */
    const user = await userModel.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        message: "User Not Found !",
      });
    } else {
      /**
       * check password correct or not
       */
      bcrypt.compare(password, user.password, (err, data) => {
        if (data) {
          const token = jwt.sign({ user }, "h4d5fe5");
          res.status(200).json({
            message: "User Login successfully",
            accessToken: token,
          });
        } else {
          res.status(403).json({
            message: "Password Is Incorrect",
          });
        }
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "User Login Failed",
    });
  }
};
module.exports = {
  registerUser,
  loginUser,
};

const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist, you can login" });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "Signup successfully", success: true });
  } catch (err) {
    console.error("Internal Server Error:", err); // 👈 Log the error
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message, // 👈 Optional: send error message in response
    });
  }
};

const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const message = "Auth failed email or password is wrong";
    if (!user) {
      return res.status(403).json({ message, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      return res.status(403).json({ message, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({
      message: "Login successfully",
      success: true,
      jwtToken,
      name: user.name,
      email,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
  login,
};

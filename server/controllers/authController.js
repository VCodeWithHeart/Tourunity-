const bcrypt = require("bcrypt");
const crypto = require("crypto");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { sendOtp } = require("../services/emailService");

// signup controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exists, you can login", success: false });
    }

    // generate OTP (6 digits)
    const otp = crypto.randomInt(100000, 999999).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    const hashedPassword = await bcrypt.hash(password, 10);

    const userModel = new UserModel({
      name,
      email,
      password: hashedPassword,
      emailVerified: false,
      otp: hashedOtp,
      otpExpiresAt,
    });

    // Send OTP email
    await sendOtp(email, otp);

    await userModel.save();
    res.status(201).json({ message: "Signup successful. Please verify your email with the OTP sent.", success: true });
  } catch (err) {
    console.error("Internal Server Error in signup:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

// verifyOtp controller
const verifyOtp = async (req, res) => {
  try {
    const { email, enteredOtp } = req.body;

    if (!email || !enteredOtp) {
      return res.status(400).json({ message: "Email and OTP are required", success: false });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    if (user.emailVerified) {
      return res.status(400).json({
        message: "Your email is already verified",
        success: false,
      });
    }

    if (!user.otp || !user.otpExpiresAt) {
      return res.status(400).json({ message: "No OTP request found. Please request a new OTP.", success: false });
    }

    const isOtpValid = new Date(user.otpExpiresAt) > new Date();

    if (!isOtpValid) {
      return res.status(400).json({ message: "OTP has expired", success: false });
    }

    const isMatch = await bcrypt.compare(String(enteredOtp), user.otp);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid OTP",
        success: false,
      });
    }

    // Mark email as verified and clear OTP data
    user.emailVerified = true;
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (error) {
    console.error("Error in verifyOtp:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const message = "Auth failed: email or password is wrong";
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
      message: "Login successful",
      success: true,
      jwtToken,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
    });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
  verifyOtp,
  login,
};

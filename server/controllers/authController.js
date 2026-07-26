const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const { sendOtp } = require("../services/emailService");
const { generateOtp } = require("../utils/otpHelper");

// signup controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      if (user.emailVerified) {
        return res
          .status(409)
          .json({ message: "Email already registered. Please login.", success: false, emailVerified: true });
      } else {
        // generate new OTP (6 digits)
        const { otp, hashedOtp, otpExpiresAt } = await generateOtp();

        user.otp = hashedOtp;
        user.otpExpiresAt = otpExpiresAt;
        if (name) user.name = name;
        if (password) {
          user.password = await bcrypt.hash(password, 10);
        }
        await user.save();
        await sendOtp(email, otp);

        return res.status(200).json({
          message: "An unverified account already exists. We have sent a new verification code to your email.",
          success: true,
          emailVerified: false,
          email: user.email,
        });
      }
    }

    // generate OTP (6 digits)
    const { otp, hashedOtp, otpExpiresAt } = await generateOtp();

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
    res.status(201).json({
      message: "Signup successful. Please verify your email with the OTP sent.",
      success: true,
      emailVerified: false,
      email: userModel.email,
    });
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
    if (!user) {
      return res.status(403).json({ message: "Account does not exist. Please sign up first.", success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      return res.status(403).json({ message: "Incorrect password. Please try again.", success: false });
    }

    if (!user.emailVerified) {
      // Generate and send a fresh OTP so the user has a valid code when redirected to verify
      const { otp, hashedOtp, otpExpiresAt } = await generateOtp();

      user.otp = hashedOtp;
      user.otpExpiresAt = otpExpiresAt;
      await user.save();
      await sendOtp(user.email, otp);

      return res.status(403).json({
        message: "Your email is not verified yet. We have sent a new verification code to your inbox.",
        success: false,
        emailVerified: false,
        email: user.email,
      });
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

// resendOtp controller
const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required", success: false });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: "Your email is already verified", success: false });
    }

    const { otp, hashedOtp, otpExpiresAt } = await generateOtp();

    user.otp = hashedOtp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    await sendOtp(email, otp);

    return res.status(200).json({
      message: "A new verification code has been sent to your email.",
      success: true,
    });
  } catch (error) {
    console.error("Error in resendOtp:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
  verifyOtp,
  login,
  resendOtp,
};

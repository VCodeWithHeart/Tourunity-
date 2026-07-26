const { signup, login, verifyOtp, resendOtp } = require("../controllers/authController");
const { signupValidation, loginValidation } = require("../middleware/authValidation");

const router = require("express").Router();

router.post("/signup", signupValidation, signup);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);
router.post("/login", loginValidation, login);

module.exports = router;

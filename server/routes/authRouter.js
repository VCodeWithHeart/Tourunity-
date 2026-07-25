const { signup, login, verifyOtp } = require("../controllers/authController");
const { signupValidation, loginValidation } = require("../middleware/authValidation");

const router = require("express").Router();

router.post("/signup", signupValidation, signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginValidation, login);

module.exports = router;

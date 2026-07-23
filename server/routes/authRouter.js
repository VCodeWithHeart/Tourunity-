const { signup, login } = require("../controllers/authController");
const { signupValidation, loginValidation } = require("../middleware/authValidation");

const router = require("express").Router();

// router.post("/login", (req, res) => {
//   res.send("login success");
// });

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;

const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const emailValidator = require("../middleware/validator/emailValidator");
const { body, check, validationResult } = require("express-validator");

router.post(
  "/newuser",
  body("email").isEmail(),
  emailValidator,
  body("password").isLength({ min: 4 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({ message : "Password must be at least 4 characters long" });
    }
    next()
  },
  register,

);

module.exports = router;

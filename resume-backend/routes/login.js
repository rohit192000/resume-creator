const express = require("express");
const loginController = require("../controllers/login");
const router = express.Router();
const emailValidator = require("../middleware/validator/emailValidator");
const { body, check, validationResult } = require("express-validator");
router.post(
  "/user",
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
  loginController
);

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");
const experienceController = require("../controllers/experience");
const personalDetailController = require("../controllers/personal_detail");
const auth = require("../middleware/auth");
const emailValidator = require("../middleware/validator/emailValidator");
const { body, check, validationResult } = require("express-validator");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  body("email").isEmail(),
  emailValidator,
  body("phone_number").isMobilePhone(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({ message : "Please Enter the valid mobile" });
    }
    next()
  },
  personalDetailController
);

router.post(
    "/experience",
    passport.authenticate("jwt", { session: false }),
    experienceController
)
module.exports = router;

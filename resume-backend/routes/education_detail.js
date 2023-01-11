const express = require("express");
const router = express.Router();
const passport = require("passport");
const educationDetailController = require("../controllers/education_detail");
const auth = require("../middleware/auth");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  educationDetailController
);
module.exports = router;

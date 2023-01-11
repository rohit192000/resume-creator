const express = require("express");
const router = express.Router();
const passport = require("passport");
const experienceController = require("../controllers/experience");
const personalDetailController = require("../controllers/personal_detail");
const auth = require("../middleware/auth");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  personalDetailController
);

router.post(
    "/experience",
    passport.authenticate("jwt", { session: false }),
    experienceController
)
module.exports = router;

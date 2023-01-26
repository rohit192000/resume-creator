const express = require("express");
const router = express.Router();
const passport = require("passport");
const educationDetailController = require("../controllers/education_detail");
const { FetchEducationalDetail } = require("../controllers/fetchdetails");
const College_Detail = require("../model/college");
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  educationDetailController
);

router.get("/college-names", async (req, res, next) => {
  try {
    var names = await new College_Detail().fetchPage({
      columns: ["college_name"],
      limit: 100,
    });

    res.status(200).json({
      names: names.toJSON(),
    });
  } catch (err) {
    console.log(err);
  }
});

router.get(
  "/getdata",
  passport.authenticate("jwt", { session: false }),
  FetchEducationalDetail
);

module.exports = router;

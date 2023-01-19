const Personal_Detail = require("../model/personal_detail");

const experienceController = async (req, res, next) => {
  try {
    var experience = req.body;
    console.log(req.body)
    experience = JSON.stringify(experience);
    console.log(experience);
    var resp = await Personal_Detail
      .where("user_id", "=", req.user.id)
      .save(
        {
          experience: experience,
        },
        {
          method: "update",
          patch: true,
          debug: true,
        }
      )
      .then((data) => {
        res.status(200).json({
          response: true,
          message: "Experience Details added successfully",
          experience: data,
        });
      })
      .catch(async (err) => {
        await Personal_Detail.where("user_id", "=", req.user.id)
          .fetch({ columns: ["experience"] })
          .then((data) => {
            res.status(200).json({
              response: true,
              message: "Experience Details added successfully",
              experience: data,
            });
          });
      });
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = experienceController;

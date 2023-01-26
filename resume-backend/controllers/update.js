const Education_Detail = require("../model/education_detail");
const Personal_Detail = require("../model/personal_detail");

const Update = async (req, res) => {
  try {
    await Personal_Detail.where({
      user_id: req.user.id,
    })
      .save(
        {
          name: req.body.personalDetail.name,
          email: req.body.personalDetail.email,
          phone_number: req.body.personalDetail.phone_number,
          gender: req.body.personalDetail.gender,
          date_of_birth: req.body.personalDetail.date_of_birth,
          experience: JSON.stringify(req.body.personalDetail.experience),
        },
        {
          patch: true,
        }
      )
      .then((data) => {
        // oldUserDetail = data;
      })
      .catch((err) => {
        console.log(err);
      });

    //  updating educational details
    req.body.educationDetails.forEach(async (data) => {
      await Education_Detail.where({
        user_id: req.user.id,
        id: data.id,
      })
        .save(
          {
            "college/uni": data["college/uni"],
            passing_year: data["passing_year"],
            marks: data["marks"],
            graduation: data["graduation"],
            post_graduation: data["post_graduation"],
          },
          {
            patch: true,
          }
        )
        .then((data) => {
          // oldUserDetail = data;
        })
        .catch((err) => {
          console.log(err);
        });
      res.status(200).json({
        message: "Details Updated successfully",
        personal_detail: data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = Update;

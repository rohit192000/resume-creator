const Personal_Detail = require("../model/personal_detail");

const experienceController = async (req, res, next) => {
  try {
    var experience = [
      {
        company_name: "MVT",
        year_of_experience: 3,
      },
    ];
    experience = JSON.stringify(experience);
    console.log(experience);
    var resp = await Personal_Detail.where({
      id: req.user.id,
    })
      .save(
        {
          experience: experience,
        },
        {
          patch: true,
        }
      )
      .then((data) => {
        res.status(200).json({
          response: true,
          message: "Experience Details added successfully",
          experience: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(resp);
    // if (resp) {
    // res.status(200).json({
    //   response: true,
    //   message: "Experience Details added successfully",
    //   experience: resp.toJSON(),
    // });
    // }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = experienceController;

// var resp = await FoodType.where({ id: data.id }).save(
//   {
//     name: data.name,
//     status: data.status,
//   },
//   { patch: true }
// );
// res.json({
//   response: true,
//   data: messages.FOOD_TYPE_UPDATED,
//   resp: resp.toJSON(),
// });

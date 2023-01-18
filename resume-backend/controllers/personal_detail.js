const Personal_Detail = require("../model/personal_detail");

const personalDetailController = async (req, res, next) => {
  try {
    console.log(req.body);
    var oldUserDetail;
    await Personal_Detail.where({
      user_id: req.user.id,
    })
      .save({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
      },{
        patch : true
      })
      .then((data) => {
        oldUserDetail = data;
        res.status(200).json({
          message: "Personal Details Updated successfully",
          personal_detail: data,
        });
      }).catch((err) => {
        console.log(err)
      })

    if (!oldUserDetail) {
      await new Personal_Detail({
        user_id: req.user.id,
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
      })
        .save()
        .then((data) => {
          res.status(200).json({
            message: "Personal Deatails added successfully",
            personal_detail: data,
          });
        });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = personalDetailController;

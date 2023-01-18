const Education_Detail = require("../model/education_detail");

const educationDetailController = async (req, res, next) => {
  try {
    console.log(req.body);
    var educationDetail;
    req.body.forEach(async (data) => {
      console.log(data);
      await Education_Detail.where({
        "user_id": req.user.id,
        "college/uni": data["college/uni"],
        "passing_year": data.passing_year,
      }).fetch()
        .then((data) => {
            console.log("search query is running");
            educationDetail = data;
          res.status(200).json({
            message: "Education Deatail already exists",
            educational_detail: data,
          });
        })
        .catch((err) => {
            // console.log("Searching Query : ", err)
        });

      if (!educationDetail) {
        console.log("Education PersonalDetail :",educationDetail)
        await new Education_Detail({
          user_id: req.user.id,
          "college/uni": data["college/uni"],
          passing_year: data["passing_year"],
          marks: data["marks"],
          graduation: data["graduation"],
          post_graduation: data["post_graduation"],
        })
          .save()
          .then((data) => {
            console.log("add query is running")
            res.status(200).json({
              message: "Education Details added successfully",
              educational_detail: data,
            });
          }).catch(err => {
            console.log("Added Query : ", err)
          });
      }
    });
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = educationDetailController;

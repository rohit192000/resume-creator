const Personal_Detail = require("../model/personal_detail");
const Education_Detail = require("../model/education_detail");

const FetchPersonalDetail = async (req, res, next) => {
    try {
        console.log("request");
        await Personal_Detail.where({
          user_id: req.user.id,
        }).fetch().then((response) => {
            res.json({
                message : response.toJSON()
            })
        })
      } catch (err) {
        console.log(err);
        next();
      }
};
const FetchEducationalDetail = async (req, res, next) => {
  try {
      console.log("request");
      await Education_Detail.where({
        user_id: req.user.id,
      }).fetchAll().then((response) => {
          res.json({
              message : response.toJSON()
          })
      })
    } catch (err) {
      console.log(err);
      next();
    }
};

module.exports = { FetchEducationalDetail, FetchPersonalDetail };

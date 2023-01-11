const Education_Detail = require('../model/education_detail');

const educationDetailController = async ( req, res, next) => {
    try{
        await new Education_Detail({
            user_id : req.user.id,
            "college/uni":"Guru Nanak Dev Engineering College",
            passing_year : "2022",
            marks : 8.29,
            graduation : true,
            post_graduation : false 
        }).save().then(data => {
            res.status(200).json({
                message : "Education Deatails added successfully",
                educational_detail : data
            })
        })
    }catch(err) {
        console.log(err);
        next()
    }
}

module.exports = educationDetailController;
const Personal_Detail = require('../model/personal_detail');

const personalDetailController = async ( req, res, next) => {
    try{
        await new Personal_Detail({
            user_id : req.user.id,
            name : 'Rohit Samal',
            email : req.user.email,
            phone_number : 9875646237,
            gender : 'male'
        }).save().then(data => {
            res.status(200).json({
                message : "Personal Deatails added successfully",
                personal_detail : data
            })
        })
    }catch(err) {
        console.log(err);
        next()
    }
}

module.exports = personalDetailController;
const Education_Detail = require("../model/education_detail");
const Personal_Detail = require("../model/personal_detail");


const Delete = async(req, res) => {
    try{
        const educ = Education_Detail.where({id : req.body.id}).destroy().then(() => {
            res.json({
                message : "Education Detail deleted successfully"
            })
        });
        // console.log(educ.toJSON())
    }catch(err){
        console.log(err);
    }
}

module.exports = Delete;
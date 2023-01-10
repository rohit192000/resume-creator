const bookshelf = require('../dbconfig');
const Education_Detail = require('./education_detail');

const Personal_Detail = bookshelf.Model.extend({
    tableName : 'personal_detail',

    user : function(){
        return this.belongsTo("User", 'user_id', 'id')
    },

    education_detail : function() {
        return this.hasMany(Education_Detail, 'personal_detail_id', 'id');
    }
})

module.exports = bookshelf.model("Personal_Detail", Personal_Detail);
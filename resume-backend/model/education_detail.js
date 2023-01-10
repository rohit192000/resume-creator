const bookshelf = require('../dbconfig');

const Education_Detail = bookshelf.Model.extend({
    tableName : 'education_detail',

    education_detail : function() {
        return this.belongsTo("Personal_Detail", 'personal_detail_id', 'id');
    }
})

module.exports = bookshelf.model("Education_Detail", Education_Detail);
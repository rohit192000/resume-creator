const bookshelf = require('../dbconfig');

const College_Detail = bookshelf.Model.extend({
    tableName : 'university_names',
})

module.exports = bookshelf.model("College_Detail", College_Detail);
const bookshelf = require("../dbconfig");
const Personal_Detail = require('./personal_detail');
const User = bookshelf.model("User", {
  tableName: "user",
  personal_detail : function(){
    return this.hasMany(Personal_Detail, 'user_id', 'id')
  }
});

module.exports = User;

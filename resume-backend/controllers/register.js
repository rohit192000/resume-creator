const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const registerController = async (req, res, next) => {
  try {
    var user_email = req.params.email;
    var password = req.params.password;

    // checks fields are empty or not
    if (!(user_email, password)) {
      res.send({
        message: "Fields are empty",
      });
    }
    
    // store already registered user
    var registeredUser;

    // checks if the user registered previously or not
    await User.where("email", "=", user_email)
      .fetch({columns : ['email']})
      .then((data) => {
        registeredUser = data.email;
        res.send({
          message: "User already registered",
          oldUser: data,
        });
      })
      .catch((err) => {
        return;
      });

    //   if user not registered then register in the database
    if (!registeredUser) {
      var encryptPassword = await bcrypt.hash(password, 10);
      const users = await new User({
        email: user_email,
        password: encryptPassword,
      }).save();
      const user = users.toJSON();
      const email = req.params.email;
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "6h",
        }
      );
      user.token = token;
      res.status(201).json({
        messsage: "User Registered successfully",
        user: user,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = registerController;

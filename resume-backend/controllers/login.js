const UserModel = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res, next) => {
  try {
    if (req.body.email && req.body.password) {
      var email = req.body.email;
      var password = req.body.password;
    }
    var registeredUser = {
      email: "",
      token: "",
    };
    // checks if user registered or not
    var user = await UserModel.where("email", "=", email)
      .fetch()
      .then(async (user) => {
        console.log(user);
        user = user.toJSON();
        //   chekcs the password
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign(
            { user_id: user.id, email },
            process.env.SECRET_KEY,
            {
              expiresIn: "6h",
            }
          );

          registeredUser.token = token;
          registeredUser.email = user.email;

          res.status(200).json({
            message: "Login Successfully",
            user: registeredUser,
          });
        } else {
          res.json({
            message: "Wrong Password",
          });
        }
      })
      .catch((err) => {
        console.log(err)
        res.json({
          message: "User not registered",
        });
      });
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = loginController;

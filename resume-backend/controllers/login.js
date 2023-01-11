const UserModel = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res, next) => {
  try {
    if (req.params.email && req.params.password) {
      var email = req.params.email;
      var password = req.params.password;
    }
    var registeredUser = {
      email: "",
      token: "",
    };
    // checks if user registered or not
    var user = await UserModel.where("email", "=", email)
      .fetch()
      .catch((err) => {
        res.status(400).json({
          message: "You are not registered",
        });
      });
    if (user) {
      var user = user.toJSON();
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
        res.status(401).json({
          message: "Wrong Password",
        });
      }
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = loginController;

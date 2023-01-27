var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
dotenv.config();
var bodyParser = require("body-parser");
var passport = require("passport");
var cors = require("cors");

var app = express();

// router call
var registerRouter = require("./routes/register");
var loginRouter = require("./routes/login");
var personalRouter = require("./routes/personal_details");
var educationRouter = require("./routes/education_detail")
var deleteRouter = require("./routes/action")
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use('/personal-detail', personalRouter);
app.use("/education-detail", educationRouter);
app.use("/action", deleteRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

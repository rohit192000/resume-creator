import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navi = useNavigate();
  // regex for validations
  var nameRegex = /^([a-zA-Z ]){3,}$/;
  var emailRegex = /^([a-zA-Z0-9+_.-]+){2,}[@]+[a-zA-Z0-9.-]+$/;

  const register = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(nameRegex.test(newUser.name));
    if (!nameRegex.test(newUser.name) && !emailRegex.test(newUser.email)) {
      alert("Patterns invalid");
      return;
    }
    if (newUser.name && newUser.email && newUser.password) {
      axios
        .post("http://localhost:3001/register/newuser", newUser)
        .then((response) => {
          console.log(response.data);
          alert(response.data.message);
          if (response.data.user) {
            localStorage.setItem("token", response.data.user.token);
            navi("/personal-detail");
          } else {
            setNewUser((prevState) => ({
              ...prevState,
              name: "",
              email: "",
              password: "",
            }));
          }
        });
    }
  };

  return (
    <>
      <div className="register bg-lt-purple">
        <form className="bg-cream register-form" onSubmit={register}>
          <div className="input-div">
            <label className="black" htmlFor="username">
              Name
            </label>
            <input
              className="input-field"
              name="username"
              placeholder="Enter Your Full Name..."
              id="username"
              type="text"
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            {!newUser.name ? (
              <div className="alert alert-danger">
                Name field should be filled
              </div>
            ) : (
              !nameRegex.test(newUser.name) && (
                <div className="alert alert-danger">
                  Name must be greater than 2 character
                </div>
              )
            )}
          </div>
          <div className="input-div">
            <label className="black" htmlFor="useremail">
              Email
            </label>
            <input
              className="input-field"
              name="useremail"
              value={newUser.email}
              placeholder="Enter Your Email..."
              id="useremail"
              type="email"
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            {!newUser.email ? (
              <div className="alert alert-danger">
                Email field should be filled
              </div>
            ) : (
              !emailRegex.test(newUser.email) && (
                <div className="alert alert-danger">
                  Email must contain @ after username
                  <br />
                  It must contain domain after @ like (google, yahoo etc...)
                  <br />
                  It must contain lowercase letter. example : xyz@gmail.com
                  <br />
                </div>
              )
            )}
          </div>
          <div className="input-div">
            <label className="black" htmlFor="userpassword">
              Password
            </label>
            <input
              className="input-field"
              name="userpassword"
              value={newUser.password}
              placeholder="Enter Your Password..."
              id="userpassword"
              type="password"
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            {!newUser.password && (
              <div className="alert alert-danger">
                Password field should be filled
              </div>
            )}
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
          <p>
            Already Registered User ! <a href="/login">Login into your account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

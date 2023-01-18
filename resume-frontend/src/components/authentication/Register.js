import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const errorRef = useRef();
  const navi = useNavigate();
  const [errorMessage, setErrMsg] = useState("");
  // regex for validations
  var nameRegex =
    /^([A-Z]+)([a-z]+){2,10}[\s]+([A-Z]+)([a-z]+){2,10}([\s]*[A-Z]*([a-z]*){2,10})$/;

  const register = async (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.password) {
      if (!nameRegex.test(newUser.name)) {
        await setErrMsg((prevState) => "Name should be in correct format");
        return (errorRef.current.style.display = "block");
      }
      axios
        .post("http://localhost:3001/register/newuser", newUser)
        .then(async (response) => {
          if (response.data.user) {
            await setNewUser((prevState) => ({
              ...prevState,
              name: "",
              email: "",
              password: "",
            }));
            localStorage.setItem("token", response.data.user.token);
            navi("/personal-detail");
          } else {
            await setErrMsg((prevState) => response.data.message);
            await setNewUser((prevState) => ({
              ...prevState,
              email: "",
              password: "",
            }));
            return (errorRef.current.style.display = "block");
          }
        });
    } else {
      await setErrMsg((prevState) => "Please fill all the fields");
      return (errorRef.current.style.display = "block");
    }
  };

  return (
    <>
      <div className="register bg-lt-purple">
        <form className="bg-cream register-form" onSubmit={register}>
          {errorMessage && (
            <div className="alert alert-danger" ref={errorRef}>
              <span
                className="closebtn"
                onClick={(e) => {
                  // console.log(e)
                  // setErrMsg((prevState) => null);
                  e.target.parentElement.style.display = "none";
                }}
              >
                &times;
              </span>
              {errorMessage}
            </div>
          )}
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
              autoComplete="off"
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
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
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
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
              autoComplete="off"
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
          <p>
            Already Registered User !{" "}
            <a href="/login">Login into your account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

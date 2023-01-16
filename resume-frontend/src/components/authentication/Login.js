import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navi = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  var emailRegex = /^([a-zA-Z0-9+_.-]+){2,}[@]+[a-zA-Z0-9.-]+$/;
  const login = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!emailRegex.test(user.email)) {
      return;
    }
    if (user.email && user.password) {
      axios.post("http://localhost:3001/login/user", user).then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        if (response.data.user) {
          localStorage.setItem("token", response.data.user.token);
          navi("/personal-detail");
        } else {
          setUser((prevState) => ({
            ...prevState,
            email: "",
            password: "",
          }));
        }
      });
    }
  };
  return (
    <>
      <div className="login bg-lt-purple">
        <form className="bg-cream register-form" onSubmit={login}>
          <div className="input-div">
            <label className="black" htmlFor="useremail">
              Email
            </label>
            <input
              className="input-field"
              name="useremail"
              value={user.email}
              placeholder="Enter Your Email..."
              id="useremail"
              type="email"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            {!user.email ? (
              <div className="alert alert-danger">
                Email field should be filled
              </div>
            ) : (
              !emailRegex.test(user.email) && (
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
              value={user.password}
              placeholder="Enter Your Password..."
              id="userpassword"
              type="password"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            {!user.password && (
              <div className="alert alert-danger">
                Password field should be filled
              </div>
            )}
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
          <p>
            New User ! <a href="/">Register Yourself</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

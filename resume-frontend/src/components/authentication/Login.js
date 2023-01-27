import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navi = useNavigate();
  const errorRef = useRef();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrMsg] = useState("");
  const login = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      axios
        .post("http://localhost:3001/login/user", user)
        .then(async (response) => {
          if (response.data.user) {
            await setUser((prevState) => ({
              ...prevState,
              email: "",
              password: "",
            }));
            alert(response.data.message);
            localStorage.setItem("token", response.data.user.token);
            navi("/all-details");
          } else {
            await setErrMsg((prevState) => response.data.message);
            await setUser((prevState) => ({
              ...prevState,
              password: "",
            }));
            errorRef.current.style.display = "block";
          }
        })
        .catch((err) => {
          console.log(err);
          // emailRef.current.style.display = "block";
        });
    } else {
      await setErrMsg((prevState) => "Please fill all the fields");
      errorRef.current.style.display = "block";
    }
  };
  return (
    <>
      <div className="login bg-lt-purple">
        <form className="bg-cream register-form" onSubmit={login}>
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
            <label className="black" htmlFor="useremail">
              Email
            </label>
            <input
              className="input-field"
              name="useremail"
              value={user.email}
              placeholder="Enter Your Email..."
              id="useremail"
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setUser((prevState) => ({
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
              value={user.password}
              placeholder="Enter Your Password..."
              id="userpassword"
              type="password"
              autoComplete="off"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
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

import React from "react";

const Login = () => {
  return (
    <>
      <div className="login bg-lt-purple">
        <form class="bg-cream register-form">
          <div className="input-div">
            <label className="black" htmlFor="useremail">
              Email
            </label>
            <input
              className="input-field"
              name="useremail"
              placeholder="Enter Your Email..."
              id="useremail"
              type="email"
            />
          </div>
          <div className="input-div">
            <label className="black" htmlFor="userpassword">
              Password
            </label>
            <input
              className="input-field"
              name="userpassword"
              placeholder="Enter Your Password..."
              id="userpassword"
              type="password"
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

import React from "react";

const Register = () => {
  return (
    <>
      <div className="register bg-lt-purple">
        <form class="bg-cream register-form">
          <div className="input-div">
            <label className="black" htmlFor="username">
              Name
            </label>
            <input
              className="input-field"
              name="username"
              placeholder="Enter Your Full Name..."
              id="username"
              type="email"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

import React from "react";

const Experience = () => {
  return (
    <>
      <div className="personal-detail bg-lt-purple">
        <h1 className="white margin-0">Personal Detail</h1>
        <form class="detail-form bg-cream ">
          <input
          className="input-field"
            name="username"
            placeholder="Enter Your Full Name..."
            id="username"
            type="text"
          />
          <input
          className="input-field"
            name="useremail"
            placeholder="Enter Your Email..."
            id="useremail"
            type="email"
          />
          <input
          className="input-field"
            name="phone_number"
            placeholder="Enter Your Phone Number..."
            id="phone_number"
            type="tel"
          />
          <fieldset>
            <legend>Gender</legend>
            <input type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" value="" id="others" />
            <label htmlFor="others">Others</label>
          </fieldset>
          <input className="input-field" type="date" id="dob" name="dob"/>
        </form>
      </div>
    </>
  );
};

export default Experience;

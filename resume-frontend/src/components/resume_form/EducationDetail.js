import React, { useEffect, useState } from "react";
import axios from "axios";
const EducationDetail = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/education-detail/college-names")
      .then((response) => {
        setNames((prevState) => response.data.names);
        console.log(response.data)
      });
  }, []);
  return (
    <>
      <div className="personal-detail bg-lt-purple">
        <h1 className="black margin-0">Education Detail</h1>
        <form className="detail-form bg-cream ">
          <select className="input-field" id="college" name="college">
            <optgroup>
              <option value="">Select Your College</option>
              {names.map((data, index) => (
                <option key={index} value={data.college_name} style={{width:'20px'}}>{data.college_name}</option>
              ))}
              <option>
                <input type='text' name='other_college' placeholder="Enter Your College Name"/>
              </option>
            </optgroup>
          </select>
          <input
            className="input-field"
            type="text"
            name="passing_year"
            id="passing_year"
            placeholder="Enter your passing year"
          />
          <input
            className="input-field"
            type="text"
            name="marks"
            id="marks"
            placeholder="Enter Passing Marks"
          />
          <fieldset className="personal-detail-fieldset">
            <legend>Type</legend>
            <input type="radio" name="graduation" value="1" id="graduation" />
            <label htmlFor="graduation">Graduation</label>
            <input
              type="radio"
              name="post_graduation"
              value="1"
              id="post_graduation"
            />
            <label htmlFor="post_graduation">Post Graduation</label>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default EducationDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";
const Experience = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/education-detail/college-names")
      .then((response) => {
        setNames((prevState) => response.data.names);
        console.log(response.data);
      });
  }, []);
  const [count, setCount] = useState([1]);
  const addCount = (index) => {
    setCount((prevState) => [...prevState, Number(count[index]) + 1]);
    console.log(count);
  };

  const deleteEducation = (index) => {
    console.log(count.length);
    if (count.length > 1) {
      let newCount = count.filter((data) => {
        return data !== count[index];
      });
      console.log(newCount);
      setCount((prevState) => newCount);
    }
  };
  return (
    <>
      <div className="education-detail bg-lt-purple ">
        <h1 className="white">Experience Detail</h1>
        <form className="education-form bg-white ">
          {count.map((data, index) => (
            <div key={index + Math.random()} className="education-form-div">
              <h3 className="margin-0">Experience {index + 1}</h3>
              <input
                className="input-field margin-bottom-5"
                type="text"
                name="company_name"
                id="company_name"
                placeholder="Enter your company name"
              />
              <input
                className="input-field margin-bottom-5"
                type="text"
                name="year_of_experience"
                id="year_of_experience"
                placeholder="Enter Y.O.E"
              />

              <fieldset className="personal-detail-fieldset margin-bottom-5">
                <legend>Type</legend>
                <input type="radio" name="work_type" value="1" id="full-time" />
                <label htmlFor="full-time">Full-Time</label>
                <input type="radio" name="work_type" value="1" id="part_time" />
                <label htmlFor="part_time">Part-Time</label>
              </fieldset>
              <div
                className="margin-bottom-5"
                style={{
                  width: "100%",
                }}
              >
                <button
                  className="input-field input-button bg-lt-purple"
                  type="button"
                  onClick={() => addCount(index)}
                >
                  ADD EXPERIENCE
                </button>
                <button
                  className="input-field input-button bg-lt-purple"
                  type="button"
                  onClick={() => deleteEducation(index)}
                >
                  DELETE EXPERIENCE
                </button>
              </div>
            </div>
          ))}

          <button className="input-field bg-lt-purple" type="submit">
            SUBMIT DETAILS
          </button>
        </form>
      </div>
    </>
  );
};

export default Experience;

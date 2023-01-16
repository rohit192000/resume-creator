import React, { useEffect, useState } from "react";
import axios from "axios";
const EducationDetail = () => {
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
    if (count.length < 3) {
      setCount((prevState) => [...prevState, Number(count[index]) + 1]);
    }
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
        <h1 className="white">Education Detail</h1>
        <form className="education-form bg-white ">
          {count.map((data, index) => (
            <div key={index + Math.random()} className="education-form-div">
              <h3 className="margin-0">Education {index + 1}</h3>
              <div className="college-div margin-bottom-5">
                <input
                  className="college input-field"
                  name="college"
                  placeholder="Select Your College..."
                  id="college"
                  type="text"
                />
                <select
                  className="college-select-field bg-white "
                  id="college"
                  name="college"
                >
                  <optgroup>
                    <option value=""></option>
                    {names.map((data, index) => (
                      <option
                        key={index}
                        value={data.college_name}
                      >
                        {data.college_name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <input
                className="input-field margin-bottom-5"
                type="text"
                name="passing_year"
                id="passing_year"
                placeholder="Enter your passing year"
              />
              <input
                className="input-field margin-bottom-5"
                type="text"
                name="marks"
                id="marks"
                placeholder="Enter Passing Marks"
              />

              <fieldset className="personal-detail-fieldset margin-bottom-5">
                <legend>Type</legend>
                <input
                  type="radio"
                  name="education_type"
                  value="1"
                  id="graduation"
                />
                <label htmlFor="graduation">Graduation</label>
                <input
                  type="radio"
                  name="education_type"
                  value="1"
                  id="post_graduation"
                />
                <label htmlFor="post_graduation">Post Graduation</label>
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
                  ADD EDUCATION
                </button>
                <button
                  className="input-field input-button bg-lt-purple"
                  type="button"
                  onClick={() => deleteEducation(index)}
                >
                  DELETE EDUCATION
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

export default EducationDetail;

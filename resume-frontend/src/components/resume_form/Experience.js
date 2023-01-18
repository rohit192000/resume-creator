import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
// import axios from "axios";
const Experience = () => {
  const [experience, setExperience] = useState([
    {
      company_name: "",
      year_of_experience: "",
    },
  ]);

  const [count, setCount] = useState([1]);
  const addCount = (index) => {
    if (count.length < 3) {
      setCount((prevState) => [
        ...prevState,
        Number(count[count.length - 1]) + 1,
      ]);
      setExperience((prevState) => [
        ...prevState,
        {
          company_name: "",
          year_of_experience: "",
        },
      ]);
    }
  };
  const addExperience = (e) => {
    e.preventDefault();
    console.log(experience);
  };
  return (
    <>
      <div className="education-detail bg-lt-purple ">
        <h1 className="white">Experience Detail</h1>
        <form className="education-form bg-white " onSubmit={addExperience}>
          <div className="education-form-div">
            {count.map((data, index) => (
              <ExperienceForm
                key={index}
                experience={experience}
                setExperience={setExperience}
                addExperience={addExperience}
                count={count}
                addCount={addCount}
                setCount={setCount}
                index={index}
              />
            ))}
            <div
              className="margin-bottom-5"
              style={{
                width: "100%",
              }}
            >
              <button
                className="input-field input-button bg-lt-purple"
                type="button"
                onClick={() => addCount()}
              >
                ADD EXPERIENCE
              </button>
              <button
                className="input-field input-button bg-lt-purple"
                type="submit"
              >
                SUBMIT DETAILS
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Experience;

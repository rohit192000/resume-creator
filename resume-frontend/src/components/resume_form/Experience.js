import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExperienceForm from "./ExperienceForm";
import axios from "axios";
const Experience = () => {
  const navi = useNavigate();
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
    // return false;
    console.log(experience);
    console.log("1")
    let token = localStorage.getItem("token");
    axios
    .post("http://localhost:3001/personal-detail/experience", experience, {
      headers: {
        "Authorization": "Bearer " + token,
      },
    })
    .then(async (response) => {
      console.log(response);
      // alert(response.data.message);
      await setCount(prevState => [1])
      await setExperience((prevState) => [{
        company_name: "",
        year_of_experience: "",
      }]);
      console.log("Go")
      navi('/all-details');
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <div className="education-detail bg-biege ">
        <h1 className="black">Experience Detail</h1>
        <form className="education-form bg-white " onSubmit={addExperience}>
          <div className="education-form-div">
            {count.map((data, index) => (
              <ExperienceForm
                key={count[index]}
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

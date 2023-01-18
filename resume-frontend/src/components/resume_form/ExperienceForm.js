import React, { useState } from "react";
const ExperienceForm = (props) => {
  // local state for storing and updating input fields values
  const [experience, setExperience] = useState({
    company_name: "",
    year_of_experience: "",
  });

  // works on onChange
  const handleChange = (e, name, index) => {
    setExperience((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // work when input field loose focus
  const handleBlur = (e, name, index1) => {
    props.setExperience((prevState) => {
      const newState = prevState.map((obj, index) => {
        if (index === index1) {
          return { ...obj, [name]: experience[name] };
        }
        return obj;
      });
      return newState;
    });
  };

  // this will remove object from specific array index and delete the field values
  const removeExperience = (index) => {
    console.log(props.count.length);
    if (props.count.length > 1) {
      props.experience.splice(index, 1);
      let newCount = props.count.filter((data) => {
        return data !== props.count[index];
      });
      props.setCount((prevState) => newCount);
    }
    if (props.count.length === 1) {
      props.setExperience((prevState) => [
        {
          company_name: "",
          year_of_experience: "",
        },
      ]);
      setExperience((prevState) => ({
        company_name: "",
        year_of_experience: "",
      }));
    }
  };

  return (
    <>
      <h3 className="">Experience {props.index + 1}</h3>
      <input
        className="input-field margin-bottom-5"
        type="text"
        name="company_name"
        id="company_name"
        placeholder="Enter your company name"
        value={experience["company_name"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
        required
      />
      <input
        className="input-field margin-bottom-5"
        type="number"
        name="year_of_experience"
        id="year_of_experience"
        placeholder="Enter Y.O.E"
        value={experience["year_of_experience"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
        required
      />

      <button
        className="input-field bg-lt-purple margin-bottom-5"
        type="button"
        onClick={() => removeExperience(props.index)}
      >
        REMOVE EXPERIENCE
      </button>
    </>
  );
};

export default ExperienceForm;

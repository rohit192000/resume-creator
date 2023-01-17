import React from "react";
const EducationForm = (props) => {
    
  const handleChange = (e, name, index1) => {
    // props.setEducationDetail((prevState) => ({
    //   ...prevState[index],
    //   [name]: e.target.value,
    // }));
    console.log(name);
    props.setEducationDetail((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj[name] === "") {
          return { ...obj, [name]: e.target.value };
        }
        return obj;
      });
      console.log(newState);
      return newState;
    });
  };
  return (
    <>
      <h3 className="margin-0 margin-bottom-5">Education {props.index + 1}</h3>
      <input
        className="input-field margin-bottom-5"
        placeholder="Select Your College..."
        type="text"
        list="college"
        name="college/uni"
        value={props.educationDetails[props.index]["college/uni"]}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
      />
      <datalist id="college" name="college">
        <optgroup>
          <option value=""></option>
          {props.names.map((data, index) => (
            <option key={props.index + Math.random()} value={data.college_name}>
              {data.college_name}
            </option>
          ))}
        </optgroup>
      </datalist>

      <input
        className="input-field margin-bottom-5"
        type="text"
        name="passing_year"
        id="passing_year"
        placeholder="Enter your passing year"
        value={
          props.educationDetails[props.index] !== undefined
            ? props.educationDetails[props.index]["passing_year"]
            : " "
        }
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
      />

      <input
        className="input-field margin-bottom-5"
        type="text"
        name="marks"
        id="marks"
        value={
          props.educationDetails[props.index] !== undefined
            ? props.educationDetails[props.index]["marks"]
            : ""
        }
        placeholder="Enter Passing Marks"
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
      />

      <fieldset
        className="personal-detail-fieldset margin-bottom-5"
        onChange={(e) => {
            console.log(e.target.value)
          if (e.target.value === "graduation") {
            props.setEducationDetail((prevState) => {
              const newState = prevState.map((obj, index) => {
                if (e.target.value === "graduation" && index === props.index) {
                  return { ...obj, graduation: true, post_graduation: false };
                }
                return obj;
              });
              console.log(newState);
              return newState;
            });
          } else {
            props.setEducationDetail((prevState) => {
              const newState = prevState.map((obj, index) => {
                if (e.target.value === "post_graduation" && index === props.index) {
                    return { ...obj, graduation: false, post_graduation: true };
                }
                return obj;
              });
              console.log(newState);
              return newState;
            });
          }
        }}
      >
        <legend>Type</legend>
        <input
          type="radio"
          name={"education_type" + props.index}
          value="graduation"
          id="graduation"
          checked={props.educationDetails[props.index]["graduation"]}
          onChange={() => {}}
        />
        <label htmlFor="graduation">Graduation</label>
        <input
          type="radio"
          name={"education_type" + props.index}
          value="post_graduation"
          id="post_graduation"
          checked={props.educationDetails[props.index]["post_graduation"]}
          onChange={() => {}}
        />
        <label htmlFor="post_graduation">Post Graduation</label>
      </fieldset>

      <button
        className="input-field bg-lt-purple margin-bottom-5"
        type="button"
        onClick={() => props.removeEducation(props.index)}
      >
        REMOVE EDUCATION
      </button>
    </>
  );
};

export default EducationForm;

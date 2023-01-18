import React, { useEffect, useRef, useState } from "react";
const EducationForm = (props) => {
  const [collegeRef, setCollegeRef] = useState({
    "college/uni": "",
    passing_year: "",
    marks: "",
    graduation: false,
    post_graduation: false,
  });
  const handleChange = (e, name, index) => {
    setCollegeRef((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const handleBlur = (e, name, index1) => {
    console.log(name);
    props.setEducationDetail((prevState) => {
      const newState = prevState.map((obj, index) => {
        if (index === index1) {
          return { ...obj, [name]: collegeRef[name] };
        }
        return obj;
      });
      console.log(newState);
      return newState;
    });
  };
  const removeEducation = (index) => {
    console.log(props.count.length);
    if (props.count.length > 1) {
      props.educationDetails.splice(index, 1);
      let newCount = props.count.filter((data) => {
        return data !== props.count[index];
      });
      console.log(newCount);
      props.setCount((prevState) => newCount);
    }
    if (props.count.length === 1) {
      props.setEducationDetail((prevState) => [
        {
          "college/uni": "",
          passing_year: "",
          marks: "",
          graduation: false,
          post_graduation: false,
        },
      ]);
      setCollegeRef((prevState) => ({
        "college/uni": "",
        passing_year: "",
        marks: "",
        graduation: false,
        post_graduation: false,
      }));
    }
  };
  useEffect(() => {
    console.log(props.educationDetails);
  }, []);
  return (
    <>
      <h3 className="margin-0 margin-bottom-5">Education {props.index + 1}</h3>
      <input
        className="input-field margin-bottom-5"
        placeholder="Select Your College..."
        type="text"
        list="college"
        name="college/uni"
        value={collegeRef["college/uni"]}
        // value={props.educationDetails[props.index]["college/uni"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
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
        value={collegeRef["passing_year"]}
        // value={props.educationDetails[props.index]["college/uni"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
      />

      <input
        className="input-field margin-bottom-5"
        type="text"
        name="marks"
        id="marks"
        placeholder="Enter Passing Marks"
        value={collegeRef["marks"]}
        // value={props.educationDetails[props.index]["college/uni"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
      />

      <fieldset
        className="personal-detail-fieldset margin-bottom-5"
        onChange={(e) => {
          console.log(e.target.value);
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
                if (
                  e.target.value === "post_graduation" &&
                  index === props.index
                ) {
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
        onClick={() => removeEducation(props.index)}
      >
        REMOVE EDUCATION
      </button>
    </>
  );
};

export default EducationForm;

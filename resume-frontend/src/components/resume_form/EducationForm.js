import React, { useEffect, useState } from "react";
const EducationForm = (props) => {
  // local state for storing and updating input fields values
  const [educationDetail, setEducationDetail] = useState({
    "college/uni": "",
    passing_year: "",
    marks: "",
    graduation: false,
    post_graduation: false,
  });

  // works on onChange
  const handleChange = (e, name, index) => {
    setEducationDetail((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  // work when input field loose focus
  const handleBlur = (e, name, index1) => {
    props.setEducationDetail((prevState) => {
      const newState = prevState.map((obj, index) => {
        if (index === index1) {
          return { ...obj, [name]: educationDetail[name] };
        }
        return obj;
      });
      return newState;
    });
  };

  // this will remove object from specific array index and delete the field values
  const removeEducation = (index) => {
    console.log(props.count.length);
    if (props.count.length > 1) {
      props.educationDetails.splice(index, 1);
      let newCount = props.count.filter((data) => {
        return data !== props.count[index];
      });
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
      setEducationDetail((prevState) => ({
        "college/uni": "",
        passing_year: "",
        marks: "",
        graduation: false,
        post_graduation: false,
      }));
    }
  };
  useEffect(() => {
    let edu = props.educationDetails[0];
    if (
      edu["college/uni"] === "" &&
      edu["passing_year"] === "" &&
      edu["marks"] === "" &&
      edu["graduation"] === false &&
      edu["post_graduation"] === false
    ) {
      setEducationDetail((prevState) => ({
        "college/uni": "",
        passing_year: "",
        marks: "",
        graduation: false,
        post_graduation: false,
      }));
    }
  }, [props.educationDetails]);

  return (
    <>
      <h3 className="margin-0 margin-bottom-5">Education {props.index + 1}</h3>
      <input
        className="input-field margin-bottom-5"
        placeholder="Select Your College..."
        type="text"
        list="college"
        name="college/uni"
        value={educationDetail["college/uni"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
        required
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
        value={educationDetail["passing_year"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
        required
      />

      <input
        className="input-field margin-bottom-5"
        type="number"
        min="1"
        max="10"
        step="0.01"
        name="marks"
        id="marks"
        placeholder="Enter Your CGPA | If Not Convert Into CGPA"
        value={educationDetail["marks"]}
        onBlur={(e) => handleBlur(e, e.target.name, props.index)}
        onChange={(e) => {
          handleChange(e, e.target.name, props.index);
        }}
        required
      />

      <fieldset
        className="personal-detail-fieldset margin-bottom-5"
        onChange={(e) => {
          if (e.target.value === "graduation") {
            props.setEducationDetail((prevState) => {
              const newState = prevState.map((obj, index) => {
                if (e.target.value === "graduation" && index === props.index) {
                  return { ...obj, graduation: true, post_graduation: false };
                }
                return obj;
              });
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
          required
        />
        <label htmlFor="graduation">Graduation</label>
        <input
          type="radio"
          name={"education_type" + props.index}
          value="post_graduation"
          id="post_graduation"
          checked={props.educationDetails[props.index]["post_graduation"]}
          onChange={() => {}}
          required
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import EducationForm from "./EducationForm";
const EducationDetail = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/education-detail/college-names")
      .then((response) => {
        setNames((prevState) => response.data.names);
        // console.log(response.data);
      });
  }, []);
  const [count, setCount] = useState([1]);
  const addCount = () => {
    if (count.length < 3) {
      setCount((prevState) => [
        ...prevState,
        Number(count[count.length - 1]) + 1,
      ]);
      setEducationDetail((prevState) => [
        ...prevState,
        {
          "college/uni": "",
          passing_year: "",
          marks: "",
          graduation: false,
          post_graduation: false,
        },
      ]);
    }
  };
  const [educationDetails, setEducationDetail] = useState([
    {
      "college/uni": "",
      passing_year: "",
      marks: "",
      graduation: false,
      post_graduation: false,
    },
  ]);

  const addEducation = (e) => {
    e.preventDefault();
    console.log(educationDetails)
  };
  return (
    <>
      <div className="education-detail bg-lt-purple ">
        <h1 className="white">Education Detail</h1>
        <form className="education-form bg-white " onSubmit={addEducation}>
          <div className="education-form-div">
            {count.map((data, index) => (
              // <React.Fragment key={index + Math.random()}>
              //   <h3 className="margin-0 margin-bottom-5">
              //     Education {index + 1}
              //   </h3>
              //   <input
              //   key="college"
              //     className="input-field margin-bottom-5"
              //     placeholder="Select Your College..."
              //     type="text"
              //     list="college"
              //     name="college/uni"
              //     value={educationDetails[index]["college/uni"]}
              //     onChange={(e) => {
              //       setEducationDetail((prevState) => {
              //         const newState = prevState.map((obj, index1) => {
              //           if (index === index1) {
              //             return { ...obj, "college/uni": e.target.value };
              //           }
              //           return obj;
              //         });
              //         console.log(newState);
              //         return newState;
              //       });
              //     }}
              //   />
              //   <datalist id="college" name="college">
              //     <optgroup>
              //       <option value=""></option>
              //       {names.map((data, index) => (
              //         <option
              //           key={index + Math.random()}
              //           value={data.college_name}
              //         >
              //           {data.college_name}
              //         </option>
              //       ))}
              //     </optgroup>
              //   </datalist>

              //   <input
              //     className="input-field margin-bottom-5"
              //     type="text"
              //     name="passing_year"
              //     id="passing_year"
              //     placeholder="Enter your passing year"
              //     value={
              //       educationDetails[index] !== undefined
              //         ? educationDetails[index]["passing_year"]
              //         : " "
              //     }
              //     onChange={(e) => {
              //       handleChange(e, e.target.name, index);
              //     }}
              //   />

              //   <input
              //     className="input-field margin-bottom-5"
              //     type="text"
              //     name="marks"
              //     id="marks"
              //     value={
              //       educationDetails[index] !== undefined
              //         ? educationDetails[index]["marks"]
              //         : ""
              //     }
              //     placeholder="Enter Passing Marks"
              //     onChange={(e) => {
              //       handleChange(e, e.target.name, index);
              //     }}
              //   />

              //   <fieldset
              //     className="personal-detail-fieldset margin-bottom-5"
              //     onChange={(e) => {
              //       console.log(e.target.value);
              //       if (e.target.value === "graduation") {
              //         setEducationDetail((prevState) => {
              //           const newState = prevState.map((obj, index1) => {
              //             if (
              //               e.target.value === "graduation" &&
              //               index1 === index
              //             ) {
              //               return {
              //                 ...obj,
              //                 graduation: true,
              //                 post_graduation: false,
              //               };
              //             }
              //             return obj;
              //           });
              //           console.log(newState);
              //           return newState;
              //         });
              //       } else {
              //         setEducationDetail((prevState) => {
              //           const newState = prevState.map((obj, index1) => {
              //             if (
              //               e.target.value === "post_graduation" &&
              //               index1 === index
              //             ) {
              //               return {
              //                 ...obj,
              //                 graduation: false,
              //                 post_graduation: true,
              //               };
              //             }
              //             return obj;
              //           });
              //           console.log(newState);
              //           return newState;
              //         });
              //       }
              //     }}
              //   >
              //     <legend>Type</legend>
              //     <input
              //       type="radio"
              //       name={"education_type" + index}
              //       value="graduation"
              //       id="graduation"
              //       checked={educationDetails[index]["graduation"]}
              //       onChange={() => {}}
              //     />
              //     <label htmlFor="graduation">Graduation</label>
              //     <input
              //       type="radio"
              //       name={"education_type" + index}
              //       value="post_graduation"
              //       id="post_graduation"
              //       checked={educationDetails[index]["post_graduation"]}
              //       onChange={() => {}}
              //     />
              //     <label htmlFor="post_graduation">Post Graduation</label>
              //   </fieldset>

              //   <button
              //     className="input-field bg-lt-purple margin-bottom-5"
              //     type="button"
              //     onClick={() => removeEducation(index)}
              //   >
              //     REMOVE EDUCATION
              //   </button>
              // </React.Fragment>
              <EducationForm
                key={index}
                educationDetails={educationDetails}
                setEducationDetail={setEducationDetail}
                addEducation={addEducation}
                count={count}
                names={names}
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
                ADD EDUCATION
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

export default EducationDetail;

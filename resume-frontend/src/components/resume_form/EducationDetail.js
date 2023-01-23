import React, { useEffect, useState } from "react";
import axios from "axios";
import EducationForm from "./EducationForm";
const EducationDetail = (props) => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/education-detail/college-names")
      .then((response) => {
        setNames((prevState) => response.data.names);
        // console.log(response.data);
      });
  }, []);
  const [educationDetails, setEducationDetail] = useState([
    {
      "college/uni": "",
      passing_year: "",
      marks: "",
      graduation: false,
      post_graduation: false,
    },
  ]);
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

  const addEducation = async (e) => {
    e.preventDefault();
    console.log(educationDetails);
    // return false;
    let token = localStorage.getItem("token");
    axios
    .post("http://localhost:3001/education-detail", educationDetails, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(async (response) => {
        console.log(response);
        alert(response.data.message);
        await setCount(prevState => [1])
        await setEducationDetail((prevState) => [{
          "college/uni": "",
          passing_year: "",
          marks: "",
          graduation: false,
          post_graduation: false,
        }]);
        props.setCurrentStep(prevState => 2);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="education-detail bg-biege">
        <h1 className="black">Education Detail</h1>
        <form className="education-form bg-white " onSubmit={addEducation}>
          <div className="education-form-div">
            {count.map((data, index) => (
              <EducationForm
                key={count[index]}
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

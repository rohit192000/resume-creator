import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Template from "./Template";
import PersonalDetailTable from "./PersonalDetailTable";
import EducationTable from "./EducationTable";
import ExperienceTable from "./ExperienceTable";
const DetailTable = (props) => {
  const navi = useNavigate();
  const [change, setChange] = useState(false);
  const tableRef = useRef(null);
  const buttonRef = useRef(null);
  const [template, setTemplate] = useState(false);
  var token = localStorage.getItem("token");
  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth: "",
    experience: [],
  });
  const [educationDetails, setEducationDetail] = useState([
    {
      "college/uni": "",
      passing_year: "",
      marks: "",
      graduation: false,
      post_graduation: false,
    },
  ]);

  const [disableRead, setRead] = useState(true);

  // update data in table onChange
  const handleEducation = (e, name, index1) => {
    console.log(name);
    setEducationDetail((prevState) => {
      const newState = prevState.map((obj, index) => {
        if (index === index1) {
          return { ...obj, [name]: e.target.value };
        }
        return obj;
      });
      return newState;
    });
  };

  // save the updated data in database
  const save = () => {
    console.log(token);
    axios
      .post(
        "http://localhost:3001/action/update",
        {
          educationDetails: educationDetails,
          personalDetail: personalDetail,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        alert(response.data.message);
      });
  };

  // deletes the experience
  const deleteExp = (index) => {
    let newExp = personalDetail.experience.filter((data, index1) => {
      return index !== index1;
    });
    console.log(newExp);
    axios
      .post("http://localhost:3001/personal-detail/experience", newExp, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);

        setPersonalDetail((prevState) => ({
          ...prevState,
          experience: JSON.parse(response.data.experience.experience),
        }));
      });
  };

  // deletes the education
  const deleteEdu = (index) => {
    axios
      .post(
        "http://localhost:3001/action/delete-education",
        educationDetails[index],
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        if(change){
          setChange((prevState) => false)
        }else{
          setChange(prevState => true);
        }
      });
  };

  // function to get all the data
  useEffect(() => {
    axios
      .get("http://localhost:3001/personal-detail/getdata", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        let exp = response.data.message;
        setPersonalDetail((prevState) => ({
          ...prevState,
          name: exp["name"],
          email: exp["email"],
          phone_number: exp["phone_number"],
          gender: exp["gender"],
          date_of_birth: exp["date_of_birth"],
          experience: JSON.parse(exp["experience"]),
        }));
      });
    axios
      .get("http://localhost:3001/education-detail/getdata", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        let edu = response.data.message;
        setEducationDetail((prevState) => edu);
      });
  }, [change]);
  return (
    <>
      <div className="edit-save-button" ref={buttonRef}>
        <button
          className="detail-button ed-save-btn"
          type="button"
          onClick={() => {
            setRead((prevState) => false);
            alert("Now you can edit the table");
          }}
        >
          Edit
        </button>
        <button
          className="detail-button ed-save-btn"
          type="button"
          onClick={() => {
            setRead((prevState) => true);
            save();
          }}
        >
          Save
        </button>
        <button
        className="detail-button ed-save-btn"
        type="button"
        onClick={() => {
          localStorage.removeItem('token');
          navi('/login');
        }}
      >
        Logout
      </button>
      </div>
      <div className="detail-table" ref={tableRef}>
        <h2
          style={{
            color: "#333333",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            marginTop: 0,
          }}
        >
          Personal Detail
        </h2>
        <PersonalDetailTable
          personalDetail={personalDetail}
          setPersonalDetail={setPersonalDetail}
          disableRead={disableRead}
        />

        <h2
          style={{
            color: "#333333",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Experience Detail
        </h2>
        <ExperienceTable
          personalDetail={personalDetail}
          setPersonalDetail={setPersonalDetail}
          disableRead={disableRead}
          deleteExp={deleteExp}
        />

        <h2
          style={{
            color: "#333333",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Educational Detail
        </h2>
        <EducationTable
          educationDetails={educationDetails}
          disableRead={disableRead}
          handleEducation={handleEducation}
          deleteEdu={deleteEdu}
        />

        <div className="add-detail-buttons">
          <button
            className="detail-button"
            type="button"
            onClick={() => {
              tableRef.current.style.display = "none";
              buttonRef.current.style.display = "none";
              setTemplate((prevState) => true);
              // console.log(personalDetail)
            }}
          >
            Generate Resume
          </button>
          <button
            className="detail-button"
            type="button"
            onClick={() => navi("/add-detail")}
          >
            Add Details
          </button>
        </div>
      </div>
      {template && (
        <Template
          personalDetail={personalDetail}
          educationDetails={educationDetails}
          tableRef={tableRef}
          buttonRef={buttonRef}
          setTemplate={setTemplate}
        />
      )}
    </>
  );
};
export default DetailTable;
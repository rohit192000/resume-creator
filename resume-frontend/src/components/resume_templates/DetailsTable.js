import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailTable = (props) => {
  const navi = useNavigate();
  var token = localStorage.getItem("token");
  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth : "",
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
          date_of_birth : exp["date_of_birth"],
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
        let exp = response.data.message;
        setEducationDetail((prevState) => exp);
      });
  }, []);
  //   console.log(personalDetail.experience[0].company_name);
  return (
    <>
      <div className="detail-table">
        <h2 style={{color : "#333333", fontFamily:"Georgia, 'Times New Roman', Times, serif", marginTop : 0}}>Personal Detail</h2>
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>{personalDetail.name}</td>
              <td>{personalDetail.email}</td>
              <td>{personalDetail.phone_number}</td>
              <td>{personalDetail.gender}</td>
              <td>{personalDetail.date_of_birth}</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{color : "#333333", fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Experience Detail</h2>
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>Company Name</th>
              <th>Year of Experience</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {personalDetail &&
              personalDetail.experience &&
              personalDetail.experience.map((data, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{data.company_name}</td>
                    <td>{data.year_of_experience}</td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>

        <h2 style={{color : "#333333", fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Educational Detail</h2>
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>College/Uni.</th>
              <th>Passing Year</th>
              <th>Passing Marks</th>
              <th>Graduation</th>
              <th>Post Graduation</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {educationDetails &&
              educationDetails.map((data, index) => (
                <tr key={index}>
                  <td>{data["college/uni"]}</td>
                  <td>{data["passing_year"]}</td>
                  <td>{data["marks"]}</td>
                  <td>{data["graduation"]}</td>
                  <td>{data["post_graduation"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="add-detail-buttons">
          <button className="detail-button" type="button">Generate Resume</button>
          <button className="detail-button" type="button" onClick={() => navi('/add-detail')}>Add Details</button>
        </div>
      </div>
    </>
  );
};
export default DetailTable;

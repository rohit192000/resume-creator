import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailTable = (props) => {
  var token = localStorage.getItem("token");
  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    experience: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/personal-detail/getdata", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPersonalDetail((prevState) => response.data.message);
      });
  }, []);
  //   console.log(personalDetail.experience[0].company_name);
  return (
    <>
      <div className="detail-table">
        <h2>Personal Detail</h2>
        <table border="1" className="personal-detail-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th colSpan="2">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{personalDetail.name}</td>
              <td>{personalDetail.email}</td>
              <td>{personalDetail.phone_number}</td>
              <td>{personalDetail.gender}</td>
              <td>{personalDetail.experience}</td>
            </tr>
            {/** {personalDetail && personalDetail.experience && personalDetail.experience.map((data, index) => (
                <React.Fragment key={index}>
                  <td>{data.company_name}</td>
                  <td>{data.year_of_experience}</td>
                </React.Fragment>
                ))}
        */}{" "}
          </tbody>
        </table>

        <h2>Educational Detail</h2>
        <table className="personal-detail-table">
          <thead>
            <tr>
              <th>College/Uni.</th>
              <th>Passing Year</th>
              <th>Passing Marks</th>
              <th>Graduation</th>
              <th>Post Graduation</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};
export default DetailTable;

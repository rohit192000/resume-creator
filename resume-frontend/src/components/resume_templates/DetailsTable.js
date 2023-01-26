import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Template from "./Template";
import Delete from "../../Images/icons/icons8-trash-48.png";
import Edit from "../../Images/icons/icons8-edit-64.png";
const DetailTable = (props) => {
  const navi = useNavigate();
  const tableRef = useRef(null);
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
    // console.log(index)
    let newExp = personalDetail.experience.filter((data, index1) => {
      // console.log(index1);
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
        console.log(response.data);
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
  };

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
        let exp = response.data.message;
        setEducationDetail((prevState) => exp);
      });
  }, []);
  console.log(personalDetail);
  return (
    <>
      <div className="edit-save-button">
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
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>
                <input
                  readOnly={disableRead}
                  className="input-fields"
                  value={personalDetail.name}
                  type="text"
                  onChange={(e) =>
                    setPersonalDetail((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                />
              </td>
              <td>
                <input
                  readOnly={disableRead}
                  className="input-fields"
                  value={personalDetail.email}
                  type="text"
                  onChange={(e) =>
                    setPersonalDetail((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </td>
              <td>
                <input
                  readOnly={disableRead}
                  className="input-fields"
                  value={personalDetail.phone_number}
                  type="text"
                  onChange={(e) =>
                    setPersonalDetail((prevState) => ({
                      ...prevState,
                      phone_number: e.target.value,
                    }))
                  }
                />
              </td>
              <td>
                <input
                  readOnly={disableRead}
                  className="input-fields"
                  value={personalDetail.gender}
                  type="text"
                  onChange={(e) =>
                    setPersonalDetail((prevState) => ({
                      ...prevState,
                      gender: e.target.value,
                    }))
                  }
                />
              </td>
              <td>
                <input
                  readOnly={disableRead}
                  className="input-fields"
                  value={personalDetail.date_of_birth}
                  type="text"
                  onChange={(e) =>
                    setPersonalDetail((prevState) => ({
                      ...prevState,
                      date_of_birth: e.target.value,
                    }))
                  }
                />
              </td>
              <td>
                <img className="icons" src={Delete} alt="delete-icon" />
              </td>
            </tr>
          </tbody>
        </table>

        <h2
          style={{
            color: "#333333",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Experience Detail
        </h2>
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>Company Name</th>
              <th>Year of Experience</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {personalDetail &&
              personalDetail.experience &&
              personalDetail.experience.map((data, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      <input
                        readOnly={disableRead}
                        className="input-fields"
                        value={data.company_name}
                        type="text"
                        onChange={(e) =>
                          setPersonalDetail((prevState) => ({
                            ...prevState,
                            experience: prevState["experience"].map(
                              (obj, index1) => {
                                if (index === index1) {
                                  return {
                                    ...obj,
                                    company_name: e.target.value,
                                  };
                                }
                                return obj;
                              }
                            ),
                          }))
                        }
                      />
                    </td>
                    <td>
                      <input
                        readOnly={disableRead}
                        className="input-fields"
                        value={data.year_of_experience}
                        type="text"
                        onChange={(e) =>
                          setPersonalDetail((prevState) => ({
                            ...prevState,
                            experience: prevState["experience"].map(
                              (obj, index1) => {
                                if (index === index1) {
                                  return {
                                    ...obj,
                                    year_of_experience: e.target.value,
                                  };
                                }
                                return obj;
                              }
                            ),
                          }))
                        }
                      />
                    </td>
                    <td onClick={() => deleteExp(index)}>
                      <img className="icons" src={Delete} alt="delete-icon" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>

        <h2
          style={{
            color: "#333333",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Educational Detail
        </h2>
        <table className="personal-detail-table">
          <thead className="table-header">
            <tr>
              <th>College/Uni.</th>
              <th>Passing Year</th>
              <th>Passing Marks</th>
              <th>Graduation</th>
              <th>Post Graduation</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {educationDetails &&
              educationDetails.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input
                      readOnly={disableRead}
                      className="input-fields"
                      value={data["college/uni"]}
                      name="college/uni"
                      type="text"
                      onChange={(e) => handleEducation(e, e.target.name, index)}
                    />
                  </td>
                  <td>
                    <input
                      readOnly={disableRead}
                      className="input-fields"
                      value={data["passing_year"]}
                      type="text"
                      name="passing_year"
                      onChange={(e) => handleEducation(e, e.target.name, index)}
                    />
                  </td>
                  <td>
                    <input
                      readOnly={disableRead}
                      className="input-fields"
                      value={data["marks"]}
                      type="text"
                      name="marks"
                      onChange={(e) => handleEducation(e, e.target.name, index)}
                    />
                  </td>
                  <td>
                    <input
                      readOnly={disableRead}
                      className="input-fields"
                      value={data["graduation"]}
                      type="text"
                      name="graduation"
                      onChange={(e) => handleEducation(e, e.target.name, index)}
                    />
                  </td>
                  <td>
                    <input
                      readOnly={disableRead}
                      className="input-fields"
                      value={data["post_graduation"]}
                      type="text"
                      name="post_graduation"
                      onChange={(e) => handleEducation(e, e.target.name, index)}
                    />
                  </td>
                  <td onClick={() => deleteEdu(index)}>
                    <img className="icons" src={Delete} alt="delete-icon" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="add-detail-buttons">
          <button
            className="detail-button"
            type="button"
            onClick={() => {
              tableRef.current.style.display = "none";
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
        />
      )}
    </>
  );
};
export default DetailTable;

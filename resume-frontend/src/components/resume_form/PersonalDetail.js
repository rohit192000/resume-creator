import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PersonalDetail = (props) => {
  const navi = useNavigate();
  const errorRef = useRef();
  // STATE TO STORE PERSONAL DETAIL

  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth: "",
  });

  const [contact, setContact] = useState({
    phone_number: "",
    country_code: "",
  });
  const [errorMessage, setErrMsg] = useState("");

  // REGEX FOR VALLIDATION

  var nameRegex =
    /^([A-Z]+)([a-z]+){2,10}[\s]+([A-Z]+)([a-z]+){2,10}([\s]*[A-Z]*([a-z]*){2,10})$/;
  // var emailRegex = /^([a-zA-Z0-9+_.-]+){2,}[@]+[a-zA-Z0-9.-][.]([a-z]+){2,}$/;
  // var contactRegex = /^\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?$/

  const submitPersonalDetail = async (e) => {
    e.preventDefault();
    console.log(personalDetail);
    // return false;
    if (
      personalDetail["name"] === "" ||
      personalDetail["email"] === "" ||
      personalDetail["gender"] === "" ||
      personalDetail["phone_number"] === "" ||
      personalDetail["date_of_birth"] === ""
    ) {
      await setErrMsg((prevState) => "Please fill all the fields");
      var a = (errorRef.current.style.display = "block");
      return a;
    }

    if (!nameRegex.test(personalDetail.name)) {
      await setErrMsg((prevState) => "Name should be in correct format");
      console.log(errorRef.current);
      return;
    }
    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:3001/personal-detail", personalDetail, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(async (response) => {
        if (response.data.personal_detail) {
          await setPersonalDetail((prevState) => ({
            ...prevState,
            name: "",
            email: "",
            phone_number: "",
            gender: "",
            date_of_birth: "",
          }));
          await setContact((prevState) => ({
            phone_number: "",
            country_code: "",
          }));
          await setErrMsg((prevState) => "");
          alert(response.data.message);
          props.setCurrentStep(prevState => 1);
        } else {
          await setErrMsg((prevState) => response.data.message);
          // errorRef.current.style.display = "block";
        }
        // alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  Checks if user login or not
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navi("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="personal-detail bg-biege">
        <h1 className="black container">Personal Detail</h1>
        <form className="detail-form bg-white " onSubmit={submitPersonalDetail}>
          {errorMessage && (
            <React.Fragment>
              <div className="alert alert-danger" ref={errorRef}>
                <span
                  className="closebtn"
                  onClick={(e) => {
                    // console.log(e)
                    // setErrMsg((prevState) => null);
                    e.target.parentElement.style.display = "none";
                  }}
                >
                  &times;
                </span>
                {errorMessage}
              </div>
            </React.Fragment>
          )}
          <input
            className="input-field"
            name="username"
            value={personalDetail.name}
            placeholder="Enter Your Full Name..."
            id="username"
            type="text"
            onChange={(e) =>
              setPersonalDetail((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <input
            className="input-field"
            name="useremail"
            value={personalDetail.email}
            placeholder="Enter Your Email..."
            id="useremail"
            type="text"
            onChange={(e) =>
              setPersonalDetail((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <div className="contact-div">
            <select
              name="country-code"
              id="country-code"
              className=" country-code-select-field"
              onChange={(e) => {
                setContact((prevState) => ({
                  ...prevState,
                  country_code: e.target.value,
                }));
              }}
            >
              <option value="+91">+91 India</option>
              <option value="+55">+55 Brazil</option>
              <option value="+44">+44 UK</option>
              <option value="+65">+65 Asia Pacific</option>
              <option value="+86">+86 Shanghai</option>
            </select>
            <input
              className="contact input-field"
              name="phone_number"
              value={contact.phone_number}
              placeholder="Enter Your Phone Number..."
              id="phone_number"
              type="text"
              onChange={(e) => {
                setContact((prevState) => ({
                  ...prevState,
                  phone_number: e.target.value,
                }));
                setPersonalDetail((prevState) => ({
                  ...prevState,
                  phone_number: e.target.previousSibling.value + e.target.value,
                }));
              }}
            />
          </div>
          <fieldset
            className="personal-detail-fieldset"
            onChange={(e) => {
              setPersonalDetail((prevState) => ({
                ...prevState,
                gender: e.target.value,
              }));
            }}
          >
            <legend>Gender</legend>
            <input type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" value="" id="others" />
            <label htmlFor="others">Others</label>
          </fieldset>
          <input
            className="input-field"
            type="date"
            id="dob"
            value={personalDetail.date_of_birth}
            name="dob"
            onChange={(e) => {
              setPersonalDetail((prevState) => ({
                ...prevState,
                date_of_birth: e.target.value,
              }));
            }}
          />
          <button className="input-field bg-lt-purple" type="submit">
            SUBMIT DETAIL
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalDetail;

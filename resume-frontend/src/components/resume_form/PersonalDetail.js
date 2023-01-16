import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PersonalDetail = () => {
  const navi = useNavigate();

  // STATE TO STORE PERSONAL DETAIL

  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    date_of_birth: "",
  });
  
  const submitPersonalDetail = (e) => {
    e.preventDefault();
    console.log(personalDetail);
    let token = localStorage.getItem('token');
    axios.post("http://localhost:3001/personal-detail", personalDetail, {
      headers: {
        'Authorization' : "Bearer " + token,
      },
    }).then(response => {
      console.log(response.data);
      alert(response.data.message)
    }).catch(err => {
      console.log(err)
    })
  };

  //  Checks if user login or not
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navi("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  }, [personalDetail]);
  return (
    <>
      <div className="personal-detail bg-lt-purple">
        <h1 className="white container">Personal Detail</h1>
        <form className="detail-form bg-white " onSubmit={submitPersonalDetail}>
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
            type="email"
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
              value={personalDetail.phone_number}
              placeholder="Enter Your Phone Number..."
              id="phone_number"
              type="tel"
              onChange={(e) =>
                setPersonalDetail((prevState) => ({
                  ...prevState,
                  phone_number: e.target.value,
                }))
              }
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

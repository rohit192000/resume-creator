import React from "react";

const Template1 = (props) => {
  console.log(props.personalDetail);
  return (
    <>
      <div className="template-1">
        <div className="fields">
          <h1
            style={{
              margin: "0",
            }}
          >
          {props.personalDetail.name}
            <br />
          </h1>
        </div>

        <div className="divider"></div>
        <div className="temp1-personal fields">
          <div className="field-values">
            <span>{props.personalDetail.phone_number}</span>
            <span>|</span>
            <span>{props.personalDetail.email}</span>
            <span>|</span>
            <span>{props.personalDetail.gender}</span>
          </div>
          {/**
          <div className="field-values">
            <span>+911234567890</span>
            <span>|</span>
            <span>rohit@gmail.com</span>
          </div>
           */}
        </div>
        <div className="divider"></div>
        {/**
        <div className="temp1-profile fields">
          <h3 className="field-header">Profile</h3>
          <span>
            Lorem ipsum dolor sit, amet consecteturas in iure! Doloribus quia
            distinctio, tempore sapiente natus fuga esse pariatur quo velit
            fugiat nihil ea alias consequuntur laborum dolorem, quas animi
            autem?
          </span>
        </div>
 */}
        <div className="temp1-education fields">
          <h3 className="field-header">Education</h3>
          {props.educationDetails &&
            props.educationDetails.map((data, index) => (
              <div className="field-values" key={index}>
                <span>{data["passing_year"]}</span>
                <span>|</span>
                <div>
                  {data["college/uni"]}
                  <br />
                  <span className="designation">
                    {" "}
                    {data["marks"]} |{" "}
                    {data["graduation"] ? "Graduation" : "Post Graduation"}
                  </span>
                </div>
              </div>
            ))}
          {/**
          <div className="field-values">
            <span>2018</span>
            <span>|</span>
            <div>
              Guru Nanak Dev Engineering College
              <br />
              <span className="designation"> 8.25 | Graduation </span>
            </div>
          </div>
          <div className="field-values">
            <span>2018</span>
            <span>|</span>
            <div>
              Guru Nanak Dev Engineering College
              <br />
              <span className="designation"> 8.25 | Graduation </span>
            </div>
          </div>
          <div className="field-values">
            <span>2018</span>
            <span>|</span>
            <div>
              Guru Nanak Dev Engineering College
              <br />
              <span className="designation"> 8.25 | Graduation </span>
            </div>
          </div>
        */}
        </div>
        <div className="temp1-experience fields">
          <h3 className="field-header">Experience</h3>
          {props.personalDetail &&
            props.personalDetail.experience &&
            props.personalDetail.experience.map((data, index) => (
              <div className="field-values" key={index}>
                <span>{data.year_of_experience} Years</span>
                <span>|</span>
                <span>{data.company_name}</span>
              </div>
            ))}

          {/**
          <div className="field-values">
            <span>2 Years</span>
            <span>|</span>
            <span>My Virtual Teams</span>
          </div>
          <div className="field-values">
            <span>2 Years</span>
            <span>|</span>
            <span>My Virtual Teams</span>
          </div>
          <div className="field-values">
            <span>2 Years</span>
            <span>|</span>
            <span>My Virtual Teams</span>
          </div>
           */}
        </div>
      </div>
    </>
  );
};
export default Template1;

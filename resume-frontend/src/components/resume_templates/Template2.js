import React from "react";

const Template2 = (props) => {
  return (
    <>
      <main className="template-2">
        <section className="side-bar">
          <h2 className="temp2-name">Rohit Samal</h2>
          <section className="personal-info">
            <h3 className="header">Personal Info</h3>
            <ul className="list">
              <li>
                Phone :<br/><span>{props.personalDetail.phone_number}</span>
              </li>
              <li>
                E-mail :<br/><span>{props.personalDetail.email}</span>
              </li>
              <li>
                Gender :<br/><span>{props.personalDetail.gender}</span>
              </li>
            </ul>
          </section>
        </section>
        <section className="other-details">
          <div>
            <section className="temp2-experience">
              <h3 style={{ margin: 0 }}>Education</h3>
            </section>
            <div className="temp2-divider"></div>
            {props.educationDetails &&
              props.educationDetails.map((data, index) => (
                <section className="exp-detail" key={index}>
                  <span>{data["passing_year"]}</span>
                  <span style={{ textAlign: "left" }}>
                    {data["college/uni"]}
                    <br />
                    <span>
                      {data["marks"]} |
                      {data["graduation"] ? "Graduation" : "Post Graduation"}
                    </span>
                  </span>
                </section>
              ))}
            {/**
            <section className="exp-detail">
              <span>2018</span>
              <span style={{ textAlign: "left" }}>
                Guru Nanak Dev Engineering College
                <br />
                <span>8.25 | Graduation</span>
              </span>
            </section>

            <section className="exp-detail">
              <span>2018</span>
              <span style={{ textAlign: "left" }}>
                Guru Nanak Dev Engineering College
                <br />
                <span>8.25 | Graduation</span>
              </span>
            </section>

            <section className="exp-detail">
              <span>2018</span>
              <span style={{ textAlign: "left" }}>
                Guru Nanak Dev Engineering College
                <br />
                <span>8.25 | Graduation</span>
              </span>
            </section>
          */}
          </div>
          <div className="temp2-divider"></div>

          <div>
            <section className="temp2-experience">
              <h3 style={{ margin: 0 }}>Experience</h3>
            </section>
            <div className="temp2-divider"></div>
            {props.personalDetail &&
              props.personalDetail.experience &&
              props.personalDetail.experience.map((data, index) => (
                <section className="exp-detail" key={index}>
                  <span>{data.year_of_experience} Years</span>
                  <span style={{ textAlign: "left" }}>{data.company_name}</span>
                </section>
              ))}
            {/**
            <section className="exp-detail">
              <span>2 Years</span>
              <span style={{ textAlign: "left" }}>
                My Virtual Teams, Ludhiana, Punjab
              </span>
            </section>
>
            <section className="exp-detail">
              <span>2 Years</span>
              <span style={{ textAlign: "left" }}>
                My Virtual Teams, Ludhiana, Punjab
              </span>
            </section>

            <section className="exp-detail">
              <span>2 Years</span>
              <span style={{ textAlign: "left" }}>
                My Virtual Teams, Ludhiana, Punjab
              </span>
            </section>
             */}
          </div>
        </section>
      </main>
    </>
  );
};
export default Template2;

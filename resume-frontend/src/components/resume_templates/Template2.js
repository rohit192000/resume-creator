import React from "react";

const Template2 = () => {
  return (
    <>
      <main className="template-2">
        <section className="side-bar">
          <h2 className="temp2-name">Rohit Samal</h2>
          <section className="personal-info">
            <h3 className="header">Personal Info</h3>
            <ul className="list">
              <li>
                Phone&nbsp;<span> : +911234567890</span>
              </li>
              <li>
                E-mail<span> : rohit@gmail.com</span>
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
          </div>

          <div className="temp2-divider"></div>

          <div>
            <section className="temp2-experience">
              <h3 style={{ margin: 0 }}>Experience</h3>
            </section>
            <div className="temp2-divider"></div>

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

            <section className="exp-detail">
              <span>2 Years</span>
              <span style={{ textAlign: "left" }}>
                My Virtual Teams, Ludhiana, Punjab
              </span>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default Template2;

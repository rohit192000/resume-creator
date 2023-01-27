import React, { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import EducationDetail from "./EducationDetail";
import Experience from "./Experience";
import Back from "../../Images/icons/icons8-back-arrow-50.png";

const Stepper = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    <PersonalDetail setCurrentStep={setCurrentStep} />,
    <EducationDetail setCurrentStep={setCurrentStep} />,
    <Experience />,
  ]);

  const leftNav = () => {
    if (currentStep === 1 || currentStep === 2) {
      setCurrentStep((prevState) => currentStep - 1);
    }
  };
  const rightNav = () => {
    if (currentStep === 1 || currentStep === 0) {
      setCurrentStep((prevState) => currentStep + 1);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "10%",
          alignItems: "center",
          justifyContent: "space-around",
          position : 'absolute',
          margin: "0% 0% 0% 1%",
          paddingTop: "1px",
          fontSize: "100%",
          cursor: "pointer",
          color: "#000",
          borderRadius: "10px",
          fontWeight: "bolder",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        <img
          style={{
            width: "20%",
          }}
          src={Back}
          alt="back-to-page"
        />
        <span style={{ fontFamily: "fantasy", fontSize: "28px" }}>
          All Detail
        </span>
      </div>
      <div className="stepper-forms-left" onClick={leftNav}>
        &lt;
      </div>
      <div className="stepper-forms-right" onClick={rightNav}>
        &gt;
      </div>
      <div className="stepper">
        <div className="stepper-div">
          {steps.map((step, index) => (
            <div className="stepper-buttons-div" key={index}>
              <button
                className="stepper-buttons"
                onClick={() => setCurrentStep((prevState) => index)}
                disabled={currentStep !== index ? true : false}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        {steps.map(
          (step, index) =>
            currentStep === index && (
              <React.Fragment key={index}>
                <div>{step}</div>
              </React.Fragment>
            )
        )}
      </div>
    </>
  );
};

export default Stepper;

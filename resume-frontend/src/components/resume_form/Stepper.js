import React, { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import EducationDetail from "./EducationDetail";
import Experience from "./Experience";
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
          background: "#F7C873",
          position: "absolute",
          width: "5%",
          fontSize : '100%',
          cursor: "pointer",
          left : '1%',
          color : 'white',
          borderRadius : '10px'
        }}
        onClick={() => window.history.back()}
      >
        Back
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

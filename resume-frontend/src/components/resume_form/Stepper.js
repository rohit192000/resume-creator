import React, { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import EducationDetail from "./EducationDetail";
import Experience from "./Experience";
const Stepper = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    <PersonalDetail setCurrentStep={setCurrentStep}/>,
    <EducationDetail setCurrentStep={setCurrentStep}/>,
    <Experience />,
  ]);
  return (
    <>
      <div className="stepper">
        <div className="stepper-div">
          {steps.map((step, index) => (
            <div className="stepper-buttons-div" key={index}>
              <button
                className="stepper-buttons"
                onClick={() => setCurrentStep((prevState) => index)}
                disabled={
                  (currentStep !== index) ? true : false
                }
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        {steps.map(
          (step, index) =>
            currentStep === index && (
              <React.Fragment key={index}>{step}</React.Fragment>
            )
        )}
      </div>
    </>
  );
};

export default Stepper;

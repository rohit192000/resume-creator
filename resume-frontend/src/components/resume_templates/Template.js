import React from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Back from "../../Images/icons/icons8-back-arrow-50.png";
const Template = (props) => {
  console.log(props.tableRef);
  return (
    <>
      <div
        style={{
          display: "flex",
          width : '10%',
          alignItems : 'center',
          justifyContent: "space-around",
          margin: "1% 0% 0% 1%",
          paddingTop: "3px",
          fontSize: "100%",
          cursor: "pointer",
          color: "#000",
          borderRadius: "10px",
          fontWeight: "bolder",
        }}
        onClick={() => {
          props.setTemplate((prevState) => false);
          props.tableRef.current.style.display = "block";
          props.buttonRef.current.style.display = "block";
        }}
      >
        <img
          style={{
            width: "20%",
          }}
          src={Back}
          alt="back-to-page"
        />
        <span style={{fontFamily : 'fantasy', fontSize : '28px'}}>All Detail</span>
      </div>
      <div className="template">
        <Template1
          personalDetail={props.personalDetail}
          educationDetails={props.educationDetails}
        />
        <Template2
          personalDetail={props.personalDetail}
          educationDetails={props.educationDetails}
        />
      </div>
    </>
  );
};
export default Template;

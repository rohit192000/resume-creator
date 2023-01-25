import React from "react"; 
import Template1 from "./Template1";
import Template2 from "./Template2";
const Template = (props) => {
    return(
        <>
            <div className="template">
                <Template1 personalDetail={props.personalDetail} educationDetails={props.educationDetails}/>
                <Template2 personalDetail={props.personalDetail} educationDetails={props.educationDetails}/>
            </div>
        </>
    )
}
export default Template;
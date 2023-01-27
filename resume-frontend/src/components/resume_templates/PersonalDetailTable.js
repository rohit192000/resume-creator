import React from "react";
import { useNavigate } from "react-router-dom";
import Edit from "../../Images/icons/icons8-edit-64.png";
const PersonalDetailTable = (props) => {
  const navi = useNavigate();
    return (
      <table className="personal-detail-table">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>
              <input
                readOnly={props.disableRead}
                className="input-fields"
                value={props.personalDetail.name}
                type="text"
                onChange={(e) =>
                  props.setPersonalDetail((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                readOnly={props.disableRead}
                className="input-fields"
                value={props.personalDetail.email}
                type="text"
                onChange={(e) =>
                  props.setPersonalDetail((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                readOnly={props.disableRead}
                className="input-fields"
                value={props.personalDetail.phone_number}
                type="text"
                onChange={(e) =>
                  props.setPersonalDetail((prevState) => ({
                    ...prevState,
                    phone_number: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                readOnly={props.disableRead}
                className="input-fields"
                value={props.personalDetail.gender}
                type="text"
                onChange={(e) =>
                  props.setPersonalDetail((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                readOnly={props.disableRead}
                className="input-fields"
                value={props.personalDetail.date_of_birth}
                type="text"
                onChange={(e) =>
                  props.setPersonalDetail((prevState) => ({
                    ...prevState,
                    date_of_birth: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <img className="icons" src={Edit} alt="delete-icon" onClick={() => navi('/add-detail')}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  
export default PersonalDetailTable;
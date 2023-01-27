import React from "react";
import Delete from "../../Images/icons/icons8-trash-48.png";

const ExperienceTable = (props) => {
  return (
    <table className="personal-detail-table">
      <thead className="table-header">
        <tr>
          <th>Company Name</th>
          <th>Year of Experience</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.personalDetail &&
          props.personalDetail.experience &&
          props.personalDetail.experience.map((data, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input
                    readOnly={props.disableRead}
                    className="input-fields"
                    value={data.company_name}
                    type="text"
                    onChange={(e) =>
                      props.setPersonalDetail((prevState) => ({
                        ...prevState,
                        experience: prevState["experience"].map(
                          (obj, index1) => {
                            if (index === index1) {
                              return { ...obj, company_name: e.target.value };
                            }

                            return obj;
                          }
                        ),
                      }))
                    }
                  />
                </td>
                <td>
                  <input
                    readOnly={props.disableRead}
                    className="input-fields"
                    value={data.year_of_experience}
                    type="text"
                    onChange={(e) =>
                      props.setPersonalDetail((prevState) => ({
                        ...prevState,
                        experience: prevState["experience"].map(
                          (obj, index1) => {
                            if (index === index1) {
                              return {
                                ...obj,
                                year_of_experience: e.target.value,
                              };
                            }

                            return obj;
                          }
                        ),
                      }))
                    }
                  />
                </td>
                <td onClick={() => props.deleteExp(index)}>
                  <img className="icons" src={Delete} alt="delete-icon" />
                </td>
              </tr>
            </React.Fragment>
          ))}
      </tbody>
    </table>
  );
};
export default ExperienceTable;

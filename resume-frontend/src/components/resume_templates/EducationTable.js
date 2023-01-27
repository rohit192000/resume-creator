import React from "react";
import Delete from "../../Images/icons/icons8-trash-48.png";
const EducationTable = (props) => {
  return (
    <table className="personal-detail-table">
      <thead className="table-header">
        <tr>
          <th>College/Uni.</th>
          <th>Passing Year</th>
          <th>Passing Marks</th>
          <th>Graduation</th>
          <th>Post Graduation</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.educationDetails &&
          props.educationDetails.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  readOnly={props.disableRead}
                  className="input-fields"
                  value={data["college/uni"]}
                  name="college/uni"
                  type="text"
                  onChange={(e) =>
                    props.handleEducation(e, e.target.name, index)
                  }
                />
              </td>
              <td>
                <input
                  readOnly={props.disableRead}
                  className="input-fields"
                  value={data["passing_year"]}
                  type="text"
                  name="passing_year"
                  onChange={(e) =>
                    props.handleEducation(e, e.target.name, index)
                  }
                />
              </td>
              <td>
                <input
                  readOnly={props.disableRead}
                  className="input-fields"
                  value={data["marks"]}
                  type="text"
                  name="marks"
                  onChange={(e) =>
                    props.handleEducation(e, e.target.name, index)
                  }
                />
              </td>
              <td>
                <input
                  readOnly={props.disableRead}
                  className="input-fields"
                  value={data["graduation"]}
                  type="text"
                  name="graduation"
                  onChange={(e) =>
                    props.handleEducation(e, e.target.name, index)
                  }
                />
              </td>
              <td>
                <input
                  readOnly={props.disableRead}
                  className="input-fields"
                  value={data["post_graduation"]}
                  type="text"
                  name="post_graduation"
                  onChange={(e) =>
                    props.handleEducation(e, e.target.name, index)
                  }
                />
              </td>
              <td onClick={() => props.deleteEdu(index)}>
                <img className="icons" src={Delete} alt="delete-icon" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default EducationTable;

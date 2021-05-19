import React from "react";
import "./style.css";

function TableRow (props) {
    return (
        <table className="table">
        <tbody>
        <tr>
          <th scope="row" className="table"></th>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
      </table>
    )
}

export default TableRow;

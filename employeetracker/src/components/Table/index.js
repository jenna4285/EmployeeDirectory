import React from "react";
import "./style.css";
// import TableRow from "./components/TableRow";

function Table () {
    return (
<table className="table table-dark container-fluid">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      {/* <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody> */}
    </tr>
  </thead>
</table>
    );
}

export default Table;


import React from "react";
import "./style.css";

function TableRow (props) {
    return (
    
        <tr>
          <th scope="row">{props.id}</th>
          <td><img height = " 30px" src={props.image} alt={props.name}/></td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>

    )
}

export default TableRow;

import React from "react";
import "./style.css";
// import TableRow from "./components/TableRow";

function Header () {
    
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Employee Database</h1>
              <input className="form-control" type="text" placeholder="Search" readonly></input><br></br>
              <p className="lead">Filter below or Search above.</p>
            </div>
          </div>
            );
}

export default Header;


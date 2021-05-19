import React, { Component } from "react";
import Header from "./components/Header"
import TableRow from "./components/TableRow";
import employees from "./employees.json";

class App extends Component {
  //   // Setting this.state.friends to the friends json array
  state = {
    employees
  };

    // handleIncrement = () => {
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    //   this.state.employees.sort() 
        
    
    // };
    
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <table className="table table-dark container-fluid">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Photo</th>
              <th scope="col" onClick={this.handleIncrement}>Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => (
                <TableRow
                  id={employee.id}
                  key={employee.id}
                  image={employee.image}
                  name={employee.name}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob}
                />
              ))}
              </tbody>
          </table>
      </div>
    );
  }
}

export default App;

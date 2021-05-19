import React, { Component } from "react";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import employees from "./employees.json";

class App extends Component {
//   // Setting this.state.friends to the friends json array
  state = {
    employees
  };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };
  render() {
    return ( 
      <div className="container-fluid">
        <Table/>
        {this.state.employees.map(employee => (
          <TableRow
            id={employee.id}
            key={employee.id}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </div>
    );
  }
}

export default App;

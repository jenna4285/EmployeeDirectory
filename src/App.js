import React, { Component } from "react";
import Header from "./components/Header"
import TableRow from "./components/TableRow";
import employees from "./employees.json";


let sortArrow="bi bi-caret-down";
class App extends React.Component {
  state = {
    employees,
    sortArrow,
    searchForm: "",
  };

  logState = (state) => {
    return console.log(state)
  }
 
  onSort(event, sortKey) {
    let randomBoolean = Math.random() < 0.5;
    let randBool=randomBoolean;
    const employees = this.state.employees;
    //ascending
    if(randBool){
      employees.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      sortArrow="bi bi-caret-up";
    } else {
      employees.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      sortArrow="bi bi-caret-down";
    }
    randBool = !randomBoolean
    //descending
    this.setState({ employees, sortArrow })
  }
  
  render() {
    // const { data } = this.props;
		// const { currentSort } = this.state;
		
		// return ( data.length > 0 && (
    return (
      <div className="container-fluid">
        <Header />
        <table className="table table-dark container-fluid">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Photo</th>
              <th scope="col" ><button onClick={(e) =>this.onSort(e, 'name')}/>Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
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
    )
    }
}

export default App;

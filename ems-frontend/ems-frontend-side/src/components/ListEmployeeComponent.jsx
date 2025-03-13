import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom"; // addEmployee için ekledik

const ListEmployeeComponent = () => {

  // EmployeeService axios işleminden sonra useState ve useEffect ile employeeListesini çektik
  //Start
  const [employees, setEmployees] = useState([])
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])
  //----------------------- End 

  // Add Employee butonu için onClick metodu
  //start
  function addNewEmployee() {
    navigator("/add-employee");
  }

  // Edit Employee butonu için onClick handler
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  /* const dummyData = [
    {
      id: 1,
      firstName: "Alcor",
      lastName: "Goetia",
      email: "a@gmail.com",
    },
    {
      id: 1,
      firstName: "Alcor",
      lastName: "Goetia",
      email: "a@gmail.com",
    },
    {
      id: 1,
      firstName: "Alcor",
      lastName: "Goetia",
      email: "a@gmail.com",
    },
  ];*/


  return <div className="container">
    <h2 className="text-center">List Of Employees</h2>
    <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
    <table className="table table-striped table-bordered">
      <thead>

        <tr>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(employee =>
            <tr key={employee.id}>
              <td>
                {employee.id}
              </td>
              <td>
                {employee.firstN}
              </td>
              <td>
                {employee.lastN}
              </td>
              <td>
                {employee.email}
              </td>
              <td>
                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>;
};

export default ListEmployeeComponent;

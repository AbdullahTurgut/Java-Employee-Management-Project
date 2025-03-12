import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {

  // EmployeeService axios işleminden sonra useState ve useEffect ile employeeListesini çektik
  //Start
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])
  //----------------------- End 

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
    <table className="table table-striped table-bordered">
      <thead>

        <tr>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee E-mail</th>
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
            </tr>
          )
        }
      </tbody>
    </table>
  </div>;
};

export default ListEmployeeComponent;

package com.alcorstudio.ems.service;

import com.alcorstudio.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    //GetEmployee
    EmployeeDto getEmployeeById(Long employeeId);

    //GetAllEmployees
    List<EmployeeDto> getAllEmployees();

    // Update Employee
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    // Delete Employee

    void deleteEmployee(Long employeeId);
}

package com.alcorstudio.ems.service;

import com.alcorstudio.ems.dto.EmployeeDto;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    //GetEmployee
    EmployeeDto getEmployeeById(Long employeeId);
}

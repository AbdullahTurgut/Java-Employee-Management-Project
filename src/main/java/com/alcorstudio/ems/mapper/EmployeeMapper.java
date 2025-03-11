package com.alcorstudio.ems.mapper;

import com.alcorstudio.ems.dto.EmployeeDto;
import com.alcorstudio.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstN(),
                employee.getLastN(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstN(),
                employeeDto.getLastN(),
                employeeDto.getEmail()
        );
    }
}

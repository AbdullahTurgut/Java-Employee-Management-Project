package com.alcorstudio.ems.service.impl;

import com.alcorstudio.ems.dto.EmployeeDto;
import com.alcorstudio.ems.entity.Employee;
import com.alcorstudio.ems.mapper.EmployeeMapper;
import com.alcorstudio.ems.repository.EmployeeRepository;
import com.alcorstudio.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}

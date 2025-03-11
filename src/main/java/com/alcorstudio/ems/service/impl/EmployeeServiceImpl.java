package com.alcorstudio.ems.service.impl;

import com.alcorstudio.ems.dto.EmployeeDto;
import com.alcorstudio.ems.entity.Employee;
import com.alcorstudio.ems.exception.ResourceNotFoundException;
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

    // eğerki id ile eşleşen veri yoksa bir hata mesajı fırlattırmak için
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exists with given id " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}

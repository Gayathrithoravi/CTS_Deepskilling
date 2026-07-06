package com.cognizant.springdatajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cognizant.springdatajpa.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
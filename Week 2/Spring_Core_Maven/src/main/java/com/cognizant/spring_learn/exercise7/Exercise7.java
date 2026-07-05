package com.cognizant.spring_learn.exercise7;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exercise7 {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("employee.xml");

        Employee employee =
                context.getBean("employee", Employee.class);

        employee.display();
    }
}
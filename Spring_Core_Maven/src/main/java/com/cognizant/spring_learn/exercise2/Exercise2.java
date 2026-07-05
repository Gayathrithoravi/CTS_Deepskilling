package com.cognizant.spring_learn.exercise2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exercise2 {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        DisplayCountry displayCountry =
                context.getBean("displayCountry", DisplayCountry.class);

        displayCountry.display();
    }
}
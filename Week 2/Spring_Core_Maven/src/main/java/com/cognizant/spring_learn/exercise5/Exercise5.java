package com.cognizant.spring_learn.exercise5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Exercise5 {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("hello.xml");

        HelloWorld hello =
                context.getBean("helloWorld", HelloWorld.class);

        hello.display();
    }
}
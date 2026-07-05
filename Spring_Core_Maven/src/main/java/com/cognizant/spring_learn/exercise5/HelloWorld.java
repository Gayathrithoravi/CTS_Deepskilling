package com.cognizant.spring_learn.exercise5;

public class HelloWorld {

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void display() {
        System.out.println(message);
    }
}
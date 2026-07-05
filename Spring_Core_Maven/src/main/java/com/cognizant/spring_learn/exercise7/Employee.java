package com.cognizant.spring_learn.exercise7;

public class Employee {

    private int id;
    private String name;
    private Address address;

    public Employee() {
    }

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void display() {
        System.out.println("Employee ID : " + id);
        System.out.println("Employee Name : " + name);
        System.out.println(address);
    }
}
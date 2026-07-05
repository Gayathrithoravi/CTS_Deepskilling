package com.cognizant.spring_learn.exercise2;

import com.cognizant.spring_learn.country.Country;

public class DisplayCountry {

    private Country country;

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public void display() {
        System.out.println(country);
    }
}
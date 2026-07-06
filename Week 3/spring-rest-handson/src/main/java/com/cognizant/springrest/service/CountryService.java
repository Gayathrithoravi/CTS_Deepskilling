package com.cognizant.springrest.service;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springrest.model.Country;

@Service
public class CountryService {

    public Country getCountry() {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        context.close();

        return country;
    }

    public Country getCountry(String code) {

        if(code.equalsIgnoreCase("IN")) {
            return new Country("IN","India");
        }
        else if(code.equalsIgnoreCase("US")) {
            return new Country("US","United States");
        }
        else if(code.equalsIgnoreCase("JP")) {
            return new Country("JP","Japan");
        }

        return null;
    }
}
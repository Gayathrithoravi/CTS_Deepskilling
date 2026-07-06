package com.cognizant.springdatajpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.springdatajpa.model.Country;
import com.cognizant.springdatajpa.service.CountryService;

@SpringBootApplication
public class SpringDataJpaHandsonApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaHandsonApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        countryService.addCountry(new Country("IN", "India"));
        countryService.addCountry(new Country("US", "United States"));
        countryService.addCountry(new Country("JP", "Japan"));
        countryService.addCountry(new Country("AU", "Australia"));

        System.out.println("===== HQL QUERY =====");
        countryService.getCountriesHQL().forEach(System.out::println);

        System.out.println();

        System.out.println("===== NATIVE QUERY =====");
        countryService.getCountriesNative().forEach(System.out::println);
    }
}
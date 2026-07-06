package com.cognizant.springdatajpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.springdatajpa.model.Country;
import com.cognizant.springdatajpa.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountry(String code) {
        return countryRepository.findByCode(code);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public List<Country> searchCountry(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Country> startsWith(String prefix) {
        return countryRepository.findByNameStartingWithIgnoreCase(prefix);
    }

    public List<Country> endsWith(String suffix) {
        return countryRepository.findByNameEndingWithIgnoreCase(suffix);
    }

    public List<Country> getCountriesHQL() {
        return countryRepository.getAllCountriesHQL();
    }

    public List<Country> getCountriesNative() {
        return countryRepository.getAllCountriesNative();
    }
}
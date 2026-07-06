package com.cognizant.springdatajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.springdatajpa.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    Country findByCode(String code);

    List<Country> findByNameContainingIgnoreCase(String name);

    List<Country> findByNameStartingWithIgnoreCase(String prefix);

    List<Country> findByNameEndingWithIgnoreCase(String suffix);

    // HQL Query
    @Query("FROM Country")
    List<Country> getAllCountriesHQL();

    // Native SQL Query
    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getAllCountriesNative();
}
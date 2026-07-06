package com.cognizant.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt.service.JwtService;

@RestController
public class JwtController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/authenticate")
    public String authenticate() {

        return jwtService.generateToken("Gayathri");
    }
}
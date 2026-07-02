package com.cognizant.Week1_TDD.exercise3;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAddition() {
        assertEquals(30, calculator.add(10, 20));
    }

    @Test
    public void testSubtraction() {
        assertEquals(5, calculator.subtract(10, 5));
    }

    @Test
    public void testMultiplication() {
        assertEquals(50, calculator.multiply(10, 5));
    }

    @Test
    public void testDivision() {
        assertEquals(2, calculator.divide(10, 5));
    }

    @Test
    public void testNotNull() {
        assertNotNull(calculator);
    }

    @Test
    public void testTrue() {
        assertTrue(calculator.add(5, 5) == 10);
    }

    @Test
    public void testFalse() {
        assertFalse(calculator.add(5, 5) == 20);
    }
}
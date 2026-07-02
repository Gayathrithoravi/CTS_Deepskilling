package com.cognizant.Week1_TDD.mockito;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceVerificationTest {

    @Test
    public void testVerifyInteraction() {

        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        // Act
        service.fetchData();

        // Assert
        verify(mockApi).getData();

    }
}
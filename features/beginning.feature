Feature: Make Cucumber Work
    As a developer of services with dependencies
    I want to demonstrate testing of a service as a black box with mocked dependencies
    So that I can have confidence in the code solely within the service

Scenario: Call the mock server
    Given I have started the mock server
    When I make a request
    Then I get the expected response


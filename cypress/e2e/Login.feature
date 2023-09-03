
Feature: Login functionalities


  Scenario: Login with valid user and pass and go HSE System
    Given user is in login page
    When user enter valid username and password
    And user click on login button
    And user click HSE Link
    Then user should logged in and redirected
#----------------------------------------------





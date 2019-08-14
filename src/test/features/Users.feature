Feature: Get list of of users
  As a user
  when I request list of users
  I must see list of users

  @test
  Scenario: Call users end point and check response code
    Given I have a service to request list of users
    When I request list of users
    Then the status code is 200

  @test
  Scenario: Call users end point and check first user
    Given I have a service to request list of users
    When I request list of users
    And response includes username "Bret" and name "Leanne Graham" fields
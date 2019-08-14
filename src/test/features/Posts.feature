Feature: Send posts

  @test
  Scenario: Make posts to server and check response code
    Given I have an end point posts
    When I post with title "new book" and author "my name"
    Then the status code is 201

  @test
  Scenario: Make posts to server and check response contains title and author
    Given I have an end point posts
    When I post with title "new book" and author "my name"
    Then response includes the following
      | title  | new book |
      | author | my name  |

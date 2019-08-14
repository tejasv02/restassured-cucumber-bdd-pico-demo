Feature: Make comments on a post
  As a user
  when I make a comment on a post
  I want to see the comment added to post

  @test
  Scenario: Make comments on post and check status code
    Given I have an end point comments
    When I post a comment "my comment" on post with title "aut quo modi neque nostrum ducimus"
    Then the status code is 201

  @test
  Scenario: Make comments on post and check response shows added comment
    Given I have an end point comments
    When I post a comment "my comment" on post with title "aut quo modi neque nostrum ducimus"
    And response includes my comment "my comment"
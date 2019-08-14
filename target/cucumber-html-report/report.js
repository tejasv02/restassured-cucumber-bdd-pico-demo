$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Comments.feature");
formatter.feature({
  "line": 1,
  "name": "Make comments on a post",
  "description": "As a user\r\nwhen I make a comment on a post\r\nI want to see the comment added to post",
  "id": "make-comments-on-a-post",
  "keyword": "Feature"
});
formatter.before({
  "duration": 105422,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Make comments on post and check status code",
  "description": "",
  "id": "make-comments-on-a-post;make-comments-on-post-and-check-status-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have an end point comments",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I post a comment \"my comment\" on post with title \"aut quo modi neque nostrum ducimus\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCommentsStepDefinitions.iHaveAnEndPointComments()"
});
formatter.result({
  "duration": 427992804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my comment",
      "offset": 18
    },
    {
      "val": "aut quo modi neque nostrum ducimus",
      "offset": 50
    }
  ],
  "location": "NewCommentsStepDefinitions.iPostACommentOnPostWithTitleAndAuthor(String,String)"
});
formatter.result({
  "duration": 1507814078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "ResponseStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 30395046,
  "status": "passed"
});
formatter.after({
  "duration": 19802,
  "status": "passed"
});
formatter.before({
  "duration": 32809,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Make comments on post and check response shows added comment",
  "description": "",
  "id": "make-comments-on-a-post;make-comments-on-post-and-check-response-shows-added-comment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I have an end point comments",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I post a comment \"my comment\" on post with title \"aut quo modi neque nostrum ducimus\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "response includes my comment \"my comment\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewCommentsStepDefinitions.iHaveAnEndPointComments()"
});
formatter.result({
  "duration": 282611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my comment",
      "offset": 18
    },
    {
      "val": "aut quo modi neque nostrum ducimus",
      "offset": 50
    }
  ],
  "location": "NewCommentsStepDefinitions.iPostACommentOnPostWithTitleAndAuthor(String,String)"
});
formatter.result({
  "duration": 468530771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my comment",
      "offset": 30
    }
  ],
  "location": "NewCommentsStepDefinitions.responseIncludesMyComment(String)"
});
formatter.result({
  "duration": 61357772,
  "status": "passed"
});
formatter.after({
  "duration": 26164,
  "status": "passed"
});
formatter.uri("Posts.feature");
formatter.feature({
  "line": 1,
  "name": "Send posts",
  "description": "",
  "id": "send-posts",
  "keyword": "Feature"
});
formatter.before({
  "duration": 51116,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Make posts to server and check response code",
  "description": "",
  "id": "send-posts;make-posts-to-server-and-check-response-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I have an end point posts",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I post with title \"new book\" and author \"my name\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "NewPostStepDefinitions.iHaveAnEndPointPosts()"
});
formatter.result({
  "duration": 216379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new book",
      "offset": 19
    },
    {
      "val": "my name",
      "offset": 41
    }
  ],
  "location": "NewPostStepDefinitions.iPostWithTitleAndAuthor(String,String)"
});
formatter.result({
  "duration": 326897460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "ResponseStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 687193,
  "status": "passed"
});
formatter.after({
  "duration": 14424,
  "status": "passed"
});
formatter.before({
  "duration": 47914,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Make posts to server and check response contains title and author",
  "description": "",
  "id": "send-posts;make-posts-to-server-and-check-response-contains-title-and-author",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have an end point posts",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I post with title \"new book\" and author \"my name\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "title",
        "new book"
      ],
      "line": 14
    },
    {
      "cells": [
        "author",
        "my name"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewPostStepDefinitions.iHaveAnEndPointPosts()"
});
formatter.result({
  "duration": 210103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new book",
      "offset": 19
    },
    {
      "val": "my name",
      "offset": 41
    }
  ],
  "location": "NewPostStepDefinitions.iPostWithTitleAndAuthor(String,String)"
});
formatter.result({
  "duration": 308705834,
  "status": "passed"
});
formatter.match({
  "location": "ResponseStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 21370356,
  "status": "passed"
});
formatter.after({
  "duration": 18875,
  "status": "passed"
});
formatter.uri("Users.feature");
formatter.feature({
  "line": 1,
  "name": "Get list of of users",
  "description": "As a user\r\nwhen I request list of users\r\nI must see list of users",
  "id": "get-list-of-of-users",
  "keyword": "Feature"
});
formatter.before({
  "duration": 54653,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Call users end point and check response code",
  "description": "",
  "id": "get-list-of-of-users;call-users-end-point-and-check-response-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have a service to request list of users",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I request list of users",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersStepDefinitions.iHaveAServiceToRequestListOfUsers()"
});
formatter.result({
  "duration": 113866511,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinitions.iRequestListOfUsers()"
});
formatter.result({
  "duration": 106954438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "ResponseStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1003552,
  "status": "passed"
});
formatter.after({
  "duration": 16319,
  "status": "passed"
});
formatter.before({
  "duration": 30745,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Call users end point and check first user",
  "description": "",
  "id": "get-list-of-of-users;call-users-end-point-and-check-first-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I have a service to request list of users",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I request list of users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "response includes username \"Bret\" and name \"Leanne Graham\" fields",
  "keyword": "And "
});
formatter.match({
  "location": "UsersStepDefinitions.iHaveAServiceToRequestListOfUsers()"
});
formatter.result({
  "duration": 109157986,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDefinitions.iRequestListOfUsers()"
});
formatter.result({
  "duration": 111790632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bret",
      "offset": 28
    },
    {
      "val": "Leanne Graham",
      "offset": 44
    }
  ],
  "location": "ResponseStepDefinitions.responseIncludesUsernameAndNameFields(String,String)"
});
formatter.result({
  "duration": 41341971,
  "status": "passed"
});
formatter.after({
  "duration": 17810,
  "status": "passed"
});
});
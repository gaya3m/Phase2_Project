$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "  Description: This feature will be used to login to saucedemo Application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the saucedemo application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters correct username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters correct password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the Product Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be able to see the welcome message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the saucedemo application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters correct username \"standard_user\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters correct password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be landed on the Product Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see the welcome message",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the saucedemo application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters correct username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Wrong password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should get message as \"\u003cErorr\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that when user enters correct user name and password they should be able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened the saucedemo application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on the Login Button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters correct username \"standard_user\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters Wrong password \"secret\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should get message as \"\u003cErorr\u003e\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
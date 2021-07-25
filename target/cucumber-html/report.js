$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  Description: This feature will be used to login the Swag lab",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see the homepage",
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
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see the homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    }
  ]
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters incorrect \"\u003cIncorrectUserName\u003e\" and \"\u003cIncorrectPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see the error \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "IncorrectUserName",
        "IncorrectPassword",
        "Error"
      ]
    },
    {
      "cells": [
        "vihaana",
        "yum@123",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@NegativeLogin"
    }
  ]
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters incorrect \"vihaana\" and \"yum@123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see the error \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "Product feature",
  "description": "  Description: This feature will be used to login the Swag lab",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductSelection"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that user is able to add the single product to the cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects the \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the Add to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "Product added successfully to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see the homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that user is able to add the single product to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductSelection"
    }
  ]
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects the \"Sauce Labs Bolt T-Shirt\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on the Add to cart button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Product added successfully to the cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Swag Lab application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see the homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that user is able to add multiple products to the cart using datatable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProductSelection"
    },
    {
      "name": "@DataTable"
    }
  ]
});
formatter.step({
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects the product",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Product1",
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Product2",
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Product3",
        "Sauce Labs Fleece Jacket"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on the Add to cart button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Product added successfully to the cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
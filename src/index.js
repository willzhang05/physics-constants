'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1;
var APP_ID = amzn1.ask.skill.f774ba56-d408-4c12-881e-9d7412ef89d0;

var SKILL_NAME = Physics Constants;
var HELP_MESSAGE = You can say tell me a physics constant, for example, Newtons constant or the permittivity of free space. You can also say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = {
    "couloumb": "Approximately 8.988 times 10 to the 9th Newton square meters per Couloumb squared",
    "newton": "Approximately 6.674 times 10 to the negative 11th cubic meters per kilogram per second squared",
    "permittivity": "Approximately 8.854 times 10 to the negative 12th Farads per meter",
    "emass": "Approximately 9.109 times 10 to the negative 31st kilograms",
    "elementary": "Approximately 1.602 times 10 to the negative 19th Couloumbs",
};

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    LaunchRequest: function () {
        var speechOutput = "What constant would you like to know?";
        var repromptOutput = "What constant would you like to know?";
        this.emit(":ask", speechOutput, repromptOutput);
    },
    GetCouloumbIntent: function () {
        var factArr = data;
        var value = factArr[couloumb];
        var speechOutput ="Couloumbs constant is  + value;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, value)
    },
    'GetNewtonIntent': function () {
        var factArr = data;
        var value = factArr['newton'];
        var speechOutput = The gravitational constant is  + value;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, value)
    },
    'GetPermittivityIntent': function () {
        var factArr = data;
        var value = factArr['permittivity'];
        var speechOutput = The permittivity of free space is  + value;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, value)
    },
    'GetEMassIntent': function () {
        var factArr = data;
        var value = factArr['emass'];
        var speechOutput = The mass of an electron is  + value;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, value)
    },
    'GetElementaryIntent': function () {
        var factArr = data;
        var value = factArr['elementary'];
        var speechOutput = The elementary charge is  + value;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, value)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

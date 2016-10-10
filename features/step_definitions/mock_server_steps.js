'use strict'

const server = require('mockserver-grunt');

const mockServerSteps = function() {
  this.Given(/^I have started the mock server$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.Given(/^I have defined a valid request$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.When(/^I make the request$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.Then(/^I get the expected response$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });
};

module.exports = mockServerSteps;

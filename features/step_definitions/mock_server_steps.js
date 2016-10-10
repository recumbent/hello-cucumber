'use strict'

const server = require('mockserver-grunt');

const mockServerSteps = function() {
  this.Given(/^I have started the mock server$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return server.start_mockserver({
                serverPort: 1080,
                verbose: true
            });
  });

  this.Given(/^I have defined a valid request$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.When(/^I make the request$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.Then(/^I get the expected response$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return Promise.resolve('pending');
  });

  this.Then(/^I can kill the server$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return server.stop_mockserver({
                serverPort: 1080,
                verbose: true
            });
  });
};

module.exports = mockServerSteps;

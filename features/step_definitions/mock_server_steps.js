'use strict'

const server = require('mockserver-grunt');
const mockServer = require('mockserver-client');
const request = require('request-promise-native')

let result;

const mockServerSteps = function() {
  this.Given(/^I have started the mock server$/, function () {
    // Start the server, assumes there's not one already running (hmmm)
    return server.start_mockserver({
             serverPort: 1080,
             verbose: true
           });
  });

  this.Given(/^I have defined a valid request$/, function () {
    // Set up a simple response to a get
    const client = mockServer.mockServerClient;
    return client("localhost", 1080).mockSimpleResponse('/hw', { name: 'value' }, 203);
  });

  this.When(/^I make the request$/, function () {
    return request('http://localhost:1080/hw')
      .then((resp) => {
        result = resp;
  //      return resp;
      });
  });

  this.Then(/^I get the expected response$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Result: ', result);
    return Promise.resolve();
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

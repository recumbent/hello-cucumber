'use strict'

const mockServer = require('mockserver-client');
const request = require('request-promise-native')

let result;

const mockServerSteps = function() {
  this.Given(/^I have defined a valid request$/, function () {
    // Set up a simple response to a get
    const client = mockServer.mockServerClient;
    return client("localhost", 1080).mockSimpleResponse('/hw', { name: 'value' }, 203);
  });

  this.When(/^I make the request$/, function () {
    // return request('http://localhost:1080/hw')
    return request({uri: 'http://localhost:1080/hw', resolveWithFullResponse: true }) 
      .then((resp) => {
        result = resp;
      });
  });

  this.Then(/^I get the expected response$/, function () {
    console.log('Result: ', result);
    return Promise.resolve();
  });
};

module.exports = mockServerSteps;

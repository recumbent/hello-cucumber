'use strict'

const mockServer = require('mockserver-client');
const request = require('request-promise-native');
const approvals = require('approvals');
const path = require('path');

let result;

const mockServerSteps = function() {
  this.Given(/^I have defined a valid request$/, function () {
    // Set up a simple response to a get
    const client = mockServer.mockServerClient;
    return client("localhost", 1080).mockSimpleResponse('/hw', { name: 'value' }, 203);
  });

  this.When(/^I make the request$/, function () {
    // return request('http://localhost:1080/hw')
    // To get the full response you go here
    return request({uri: 'http://localhost:1080/hw', resolveWithFullResponse: true })
      .then((resp) => {
        result = resp;
      });
  });

  this.Then(/^I get the expected response$/, function () {
    console.log('Status: ', result.statusCode);
    console.log('Result: ', result.body);
    approvals.verify(path.join(__dirname, 'approvals'), 'I_get_the_expected_response', result.body);
  });
};

module.exports = mockServerSteps;

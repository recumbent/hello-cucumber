// features/step_definitions/hooks.js
const server = require('mockserver-grunt');

module.exports = function () {
  this.Before(function() {
    console.log('Before - starting mock server:');
    return server.start_mockserver({
             serverPort: 1080,
             verbose: true
           });
  });

  this.After(function() {
    console.log('After - stopping mock server');
    return server.stop_mockserver({
             serverPort: 1080,
             verbose: true
           });      
  });
};
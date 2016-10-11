# Hello Cucmber

This is a simple proof of concept using Cucumber with mockserver.

I had two issues:

1. Cucumber with promises
1. Starting mockserver

Cucmber.js supports promises - its just a question of getting the code right, to create a pending step do: ```return Promise.resolve('pending');```

The specific problem with starting mockserver was that we were continuing before the server had been spun up and then failing to shut it down at the end of the tests. The git history shows using steps to start/stop the server, the code is now in hooks.js in Before and After steps to start/stop. By returning the function results which are promises cucumber.js deals with everything nicely.

To further add to the fun I've used an approval test for the result.

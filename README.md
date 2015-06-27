# ES2015 Demo

This project contains a set of tests that demonstrate the features of [ES2015](http://www.ecma-international.org/ecma-262/6.0/).

## Prerequisites

This project uses Docker to execute iojs 2.3 within a container. This container is used to exercise the tests.

If you don't want to use Docker then please make sure you have io.js 2.3 installed and in your path.

## Installing and running the tests

After cloning the repo run the following to install the package dependencies:

```bash
$ npm install
```

Run the following to execute the tests within the Docker container:

```bash
$ npm start
```

## Exploring the test code

Tests are located in the /test folder in files named after the specific feature being demonstrated.

# get-list-api

[![CircleCI](https://circleci.com/gh/DanhTPT97/Capstone-Udacity-Cloud-Devops.svg?style=svg)](https://app.circleci.com/pipelines/github/DanhTPT97/Capstone-Udacity-Cloud-Devops)

Project Set Up Pipeline using CircleCI
Build Docker Container and Deployment simple examples using [jest](https://jestjs.io/) to test a [node](https://nodejs.org/en/) API to AWS. 

## Summary
  - [project structure?](#whats-the-project-structure)
  - [how to run and test the endpoint](#how-to-run-and-test-the-endpoint)
  - [how to test the code](#how-to-test-the-code)


## what's the project structure?
```
  .
  ├─-backend
      ├── package.json
      ├── package-lock.json
      ├── src
      │   ├── controller.js
      │   ├── index.js
      │   ├── router.js
      │   └── service.js
      └── test
          ├── controller.test.js
          ├── index.test.js
          ├── router.test.js
          └── service.test.js
```

## how to run and test the endpoint
Prerequisites
```
  $ node --version
  v18.16.0
```
Run
```
  $ npm start
```

Test the endpoint
```
  $ curl localhost:3000/posts
```
## how to test the code
We're using [Jest](https://jestjs.io/), you can run this npm script:
```
  $ npm run test
```
**Tip**: You can also try the `npm test`

{
    "name": "practice_3",
    "version": "1.0.0",
    "description": "Protractor tests for login and admin pages",
    "main": "config.js",
    "scripts": {
      "test": "protractor config.js",
      "posttest": "allure generate allure-results --clean -o allure-report"
    },
    "dependencies": {
      "jasmine-allure-reporter": "^1.0.2"
    },
    "devDependencies": {
      "allure-commandline": "^2.7.0",
      "protractor": "^5.4.0"
    },
    "author": "Alyona Gladych",
    "license": "ISC"
  }

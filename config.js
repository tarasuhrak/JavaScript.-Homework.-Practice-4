
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: 0,
    allScriptsTimeout: 30,
  
    
    capabilities: {
      browserName: 'chrome',
      maxInstances: 1
    },
  
      specs: ['./tests/demo-test.js'],
  
  
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      defaultTimeoutInterval: 44000
    },

    framework: 'jasmine2',

    onPrepare: function() {
      let AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
      }));
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });

    }
  };
const testHelper = require('../../helpers/test-helper');

describe('Laying bodies index page', function(){
  testHelper.setupBefore();

  it('should render content for laying-bodies index page', function(done){
    testHelper.shunterTest('index', 'layout', 'laying-bodies', done, true);
  });

});

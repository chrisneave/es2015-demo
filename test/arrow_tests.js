var expect = require('chai').expect;
var _ = require('underscore');

describe('arrows', function() {
  it('support expression bodies', function() {
    var nums = [1,2,3];
    var squared = _.map(nums, x => x * x);
    expect(squared).to.eql([1,4,9]);
  });
});

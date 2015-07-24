var expect = require('chai').expect;
var _ = require('underscore');

describe('arrows', function() {
  'use strict';

  it('support expression bodies', function() {
    var nums = [1, 2, 3];
    var squared = _.map(nums, x => x * x);
    expect(squared).to.eql([1, 4, 9]);
  });

  it('support statement bodies', function() {
    var nums = [1, 2, 3];
    var squaredEvens = _.map(nums, x => {
      if (x % 2 === 0) {
        x = x * x;
      }

      return x;
    });
    expect(squaredEvens).to.eql([1, 4, 3]);
  });

  it('can be stored in variables', function() {
    var nums = [1, 2, 3];
    var double = x => x * 2;

    expect(_.map(nums, double)).to.eql([2, 4, 6]);
  });

  it('can use closures', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var odds = [];

    _.each(nums, x => {
      if (x % 2 !== 0) {
        odds.push(x);
      }
    });

    expect(odds).to.eql([1, 3, 5, 7, 9]);
  });

  it('shares the same "this" as the surrounding code. Binding of lexical this is broken in V8 currently => https://github.com/nodejs/io.js/issues/735', function() {
    /*
    var people = ['Rod', 'Jane', 'Freddy'];
    var obj = {
      greeting: 'Hello, ',
      createGreetings: function() {
        return _.map(people, x => {
          return this.greeting + x;
        });
      }
    }

    expect(obj.createGreetings()).to.eql(['Hello, Rod', 'Hello, Jane', 'Hello, Freddy']);
    */
  });
});

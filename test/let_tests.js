'use strict';
var expect = require('chai').expect;

describe('let', function() {
  it('variables declared with let are not accessible in other blocks within the same function', function() {
    var a = 1;

    if (true) {
      let foo = 'bar';
    }

    try {
      a = foo;
    }
    catch(err) {
      expect(err).to.be.an.instanceOf(ReferenceError);
    }

    expect(a).to.equal(1);
  });

  it('variables declared with let are accessible within nested blocks', function() {
    let foo = 'bar';

    if (true) {
      expect(foo).to.equal('bar');
    }
  });
});

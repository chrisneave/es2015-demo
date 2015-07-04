'use strict';
var expect = require('chai').expect;

describe('const', function() {
  it('variables declared with const are immutable', function() {
    const foo = 'bar';

    try {
      foo = 'baz';
    }
    catch (err) {
      expect(err).to.be.an.instanceOf(TypeError);
    }

    expect(foo).to.equal('bar');
  });

  it('is block scoped like let', function() {
    if (true) {
      const foo = 'bar';
    }

    try {
      var a = foo;
    }
    catch (err) {
      expect(err).to.be.an.instanceOf(ReferenceError);
    }

    expect(a).to.be.undefined;
  });
});

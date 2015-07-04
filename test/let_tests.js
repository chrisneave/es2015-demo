'use strict';
var expect = require('chai').expect;

describe('let', function() {
  it('variables declared with let are accessible within nested blocks', function() {
    let foo = 'bar';

    if (true) {
      expect(foo).to.equal('bar');
    }
  });
});

var expect = require('chai').expect;

describe('Map', function() {
  'use strict';

  it('is a type that can be constructed', function() {
    var m = new Map();
    expect(m).to.be.an.instanceOf(Map);
  });

  it('has a size', function() {
    var m = new Map();
    expect(m.size).to.equal(0);
  });

  it('size cannot be modified directly', function() {
    var m = new Map();
    m.size = 2;
    expect(m.size).to.equal(0);
  });

  it('can store a key/value pair', function() {
    var m = new Map();
    m.set('foo', 'bar');
    expect(m.size).to.equal(1);
  });

  it('keys can be any type', function() {
    var m = new Map();
    m.set(new Date(), 'bar');
    m.set({key: 'foo'}, 'bar');
    m.set(true, 'bar');
    m.set(3.14, 'bar');
    m.set(null, 'bar');
    m.set(undefined, 'bar');
    m.set(NaN, 'bar');
    m.set(function() { return 'foo'; }, 'bar');
    m.set(/foo/, 'bar');
    expect(m.size).to.equal(9);
  });

  it('can retrieve a value by key', function() {
    var m = new Map();
    m.set('foo', 'bar');
    expect(m.get('foo')).to.equal('bar');
  });

  it('values for non-existent keys are "undefined"', function() {
    var m = new Map();
    expect(m.get('foo')).to.be.undefined;
  });

  it('can test for existence of a key', function() {
    var m = new Map();
    m.set('foo');
    expect(m.has('foo')).to.be.true;
    expect(m.has('non-existent key')).to.be.false;
  });

  it('can delete a key', function() {
    var m = new Map();
    m.set('foo', 'bar');
    m.delete('foo');
    expect(m.size).to.equal(0);
    m.delete('nada');
    expect(m.size).to.equal(0);
  });

  it('can be cleared of all keys', function() {
    var m = new Map();
    m.set('foo', 'bar');
    m.set('bar', 'baz');
    m.set('baz', 'foo');
    expect(m.size).to.equal(3);
    m.clear();
    expect(m.size).to.equal(0);
  });

  it('can be enumerated using forEach()', function() {
    var m = new Map();
    var result = {};
    m.set('foo', 'bar');
    m.set('bar', 'baz');
    m.set('baz', 'foo');
    m.forEach(function(value, key) {
      result[key] = value;
    });
    expect(result).to.eql({'foo': 'bar', 'bar': 'baz', 'baz': 'foo'});
  });
});

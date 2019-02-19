const assert = require('assert');

const Paint = require('../paint.js');

describe('paint', function() {

  let paint;

  beforeEach(function(){
    paint = new Paint(5);
  });

  it('should have an litre amount', function(){
    actual = paint.capacity;
    expected = 5;
    assert.strictEqual(actual, expected)
  })

  it('should be able to show empty', function() {
    actual = paint.checkEmpty();
    expected = false;
    assert.strictEqual(actual, expected);
  })

  it('should be able to empty itself', function() {
    paint.reduce(5);
    actual = paint.checkEmpty();
    expected = true;
    assert.strictEqual(actual, expected)
  })
})

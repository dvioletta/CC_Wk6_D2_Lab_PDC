const assert = require('assert');

const Decorator= require('../decorator.js');
const Paint = require('../paint.js');

describe('decorator', function() {

  let decorator;
  let paintCan;

  beforeEach(function() {
    paintCan = new Paint(10);
    decorator = new Decorator();

  })
  it('should start with no paint', function(){
    actual = decorator.paintStock.length;
    expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a can of paint', function(){
    decorator.addStock(paintCan);
    actual = decorator.paintStock.length;
    expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate litres of stock');

  it('should be able to calulate enough paint for room');
})

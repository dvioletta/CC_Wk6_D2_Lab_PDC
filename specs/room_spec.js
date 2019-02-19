const assert = require('assert');

const Room = require('../room.js')

describe('room', function() {

  let room;

  beforeEach(function(){
    room = new Room(64, false);
  });

  it('should have an area', function() {
    actual = room.area;
    expected = 64;
    assert.strictEqual(actual, expected);

  });

  it('should be paintable', function() {
    actual = room.painted;
    expected = false;
    assert.strictEqual(actual, expected);

  });


})

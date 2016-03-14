var test = require('tape')
var assert = require('assert')
var module = require('..')

test('the value of pi', function(t) {
  var result = module()
  console.log('Your result was ' + result)
  assert(Math.abs(Math.PI - result) < 0.001, 'closer than a thousandth of pi')
})

var test = require('tape')
var module = require('..')

test('the value of pi', function(t) {
  t.plan(1)
  var result = module()
  console.log('Your result was ' + result)
  t.ok(Math.abs(result - Math.PI) < 0.001, 'closer than a thousandth of pi')
})

module.exports = function() {

  var sideCount = 10000

  var first = {x:0, y:1}

  // https://en.wikipedia.org/wiki/Euler%27s_formula
  var angle = (Math.PI * 2) / sideCount
  var second = {
    x: Math.sin(angle),
    y: Math.cos(angle),
  }

  // Pythagorean theorem: a^2 + b^2 = c^2
  var a = second.x - first.x
  var b = first.y - second.y
  var cSquared = Math.pow(a, 2) + Math.pow(b, 2)
  var c = Math.sqrt(cSquared)

  var circumference =  c * sideCount
  var diameter = 2

  return circumference / diameter
}

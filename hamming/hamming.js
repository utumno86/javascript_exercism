/**
 * Calculates hamming distance between two DNA strands
*/
function Hamming() {}
Hamming.prototype.compute = function(string1, string2) {
  let count = 0
  if (string1.length !== string2.length) {
    throw new Error('DNA strands must be of equal length.')
  } else {
    for (var i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        count++
      }
    }
  }
  return count
}

module.exports = Hamming

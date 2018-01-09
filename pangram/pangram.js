let Pangram = function(input) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return {
    isPangram: function () {
      var pangram = true
      if (!input) {
        pangram = false
      } else {
        input = input.toLowerCase()
        input = input.replace(/_/gi, '')
        for (var i = 0; i < 26; i++) {
          if (!input.includes(alphabet[i])) {
            pangram = false
          }
        }
      }
      return pangram
    }
  }
}

module.exports = Pangram;

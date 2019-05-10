const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const isPangram = (input) => {
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
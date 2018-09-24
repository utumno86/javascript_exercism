/**
*Generate a random key or take a key that is provided
*@param {string} key the cipher key
*/
function Cipher(key) {
  if (key) {
    if (key.toUpperCase() === key || !isNaN(key)) throw new Error('Bad key')
    this.key = key
  } else if (key === '') {
    throw new Error('Bad key')
  } else {
    this.key = randomKey()
  }
}

Cipher.prototype.encode = function(input) {
  return decodeEncode(input, true, this)
}

Cipher.prototype.decode = function(input) {
  return decodeEncode(input, false, this)
}

function decodeEncode(input, encode, cipher){
  let encodedDecodedString = ''
  if (input) {
    let characters = input.split('');
    for (i = 0; i < characters.length; i++) {
      let keyIndex = i
      if(encode){
        while ( keyIndex >= cipher.key.length){
          keyIndex -= cipher.key.length
        }
      }
      let characterCode = characters[i].charCodeAt(0) - 97
      let keyCode = cipher.key[keyIndex].charCodeAt(0) - 97
      if (encode) {
        let encodedCode = characterCode + keyCode
        while (encodedCode >= 26){
          encodedCode -= 26
        }
        encodedDecodedString += String.fromCharCode(
          encodedCode + 97
        )
      } else {
        let encodedCode = characterCode - keyCode
        while (encodedCode < 0){
          encodedCode += 26
        }
        encodedDecodedString += String.fromCharCode(
          encodedCode + 97
        )
      }
    }
  }
  return encodedDecodedString
}

/**
*Generate a random key
*@return {string} cipher key
*/
function randomKey() {
  let key = ''

  for (i = 0; i < 101; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  return key.toLowerCase()
}

module.exports = Cipher;

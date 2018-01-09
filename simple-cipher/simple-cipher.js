/**
*Generate a random key or take a key that is provided
*@param {string} key the cipher key
*/
function Cipher(key) {
  if (key) {
    this.key = key;
  } else {
    this.key = randomKey();
  }
}

Cipher.prototype.encode = function(input) {
  if (input) {
    let characters = input.split('');
    var encoded = '';
    for (i = 0; i < characters.length; i++) {
      encoded += String.fromCharCode(
        characters[i].charCodeAt(0) - 97 + (this.key[i].charCodeAt(0) - 97) + 97
      );
    }
  }
  return encoded;
};

function randomKey() {
  var key = '';

  for (i = 0; i < 20; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  return key.toLowerCase();
}

module.exports = Cipher;

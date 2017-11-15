function Cipher(key) {
  if (key) {
    this.key = key;
  } else {
    this.key = randomKey();
  }
}

Cipher.prototype.encode = function(input) {
  characters = input.split('');
};

function randomKey() {
  var key = '';

  for (i = 0; i < 20; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  return key.toLowerCase();
}

module.exports = Cipher;

module.exports = function Anagram(word) {
  /**
   * Checks whether the input is an anagram
   * @param {string} words input string
   * @return {string} anagram string
  */
  function matches(words) {
    if (!(words instanceof Array)) {
      words = [].map.call(arguments, function(word) {
        return word;
      });
    }
    answer = [];
    letters = word.toLowerCase().split('');
    for (i = 0; i < words.length; i++) {
      match = true;
      anagramLetters = words[i].toLowerCase().split('');
      for (j = 0; j < letters.length; j++) {
        index = anagramLetters.indexOf(letters[j]);
        if (index === -1) {
          match = false;
        } else {
          anagramLetters.splice(index, 1);
        }
      }
      if (match === true && word.length == words[i].length && word.toLowerCase() != words[i].toLowerCase()) {
        answer.push(words[i]);
      }
    }
    return answer;
  }

  return {
    matches: matches,
  };
};

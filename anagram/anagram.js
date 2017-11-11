module.exports = function Anagram(word){
  function matches(words) {
    if (!(words instanceof Array)) {
    words = [].map.call(arguments, function (word) { return word; });
    }
    answer = [ ];
    letters = word.toLowerCase().split("");
    for (i = 0; i < words.length; i++) {
      match = true;
      anagram_letters = words[i].toLowerCase().split("");
      for (j = 0; j < letters.length; j++) {
        index = anagram_letters.indexOf(letters[j]);
        if (index === -1) {
          match = false;
        }
        else {
          anagram_letters.splice(index, 1);
        }
      }
      if (match === true && word.length == words[i].length && word.toLowerCase() != words[i].toLowerCase()){
        answer.push(words[i]);
      }
    }
    return answer;
  }

  return{
    matches: matches
  };
};

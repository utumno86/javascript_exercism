if (module) {
  module.exports = analysis;
}

/**
 * Function for finding the number of words in a given string
 * @param {string} text input string
 * @return {hashmap} table hash of number of variable in the string
 */
function analysis(text) {
  let table = {};
  words = text.split(" ");
  for (i=0; i<words.length; i++){
    temp = words[i].split('\n');
    if (temp.length > 1){
      for (j=0; j<temp.length; j++){
        words.push(temp[j]);
      }
      words.splice(i, 1);
    }
  }
  for (i=0; i<words.length; i++){
    temp = words[i].split('\t');
    if (temp.length > 1){
      for (j=0; j<temp.length; j++){
        words.push(temp[j]);
      }
      words.splice(i, 1);
    }
  }
  for (i=0; i<words.length; i++){
    if(words[i] !== ''){
      table[words[i]] = 0;
    }
  }
  for (i=0; i<words.length; i++){
    if(words[i] !== ''){
      table[words[i]] ++;
    }
  }
  return table;
}

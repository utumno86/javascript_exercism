if (module){
  module.exports = analysis;
}

function analysis(text){
  var table = {};
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

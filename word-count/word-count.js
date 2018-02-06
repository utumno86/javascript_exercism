/**
* Wrapper class for the word-count function
*/
class Words {
    /**
    * Function for finding the number of words in a given string
    * @param {string} text input string
    * @return {hashmap} table hash of number of variable in the string
    */
    count(text) {
        let table = {};
        let words = text.replace(/\s/, ' ');
        console.log(words);
        words = text.toLowerCase().replace(/[¡¿.?@\/#!$%\^&\*;:{}=\-_`~()]/g, '').trim().split(' ');
        words.forEach(function(subwords) {
            subwords.split(',').forEach(function(word) {
                if (word[0] === '\'' && word[word.length - 1] === '\'') {
                    word = word.slice(1, -1);
                }
                if (table[word]) {
                    table[word]++;
                } else if ( word != '') {
                    table[word] = 1;
                }
            });
        });
        return table;
    };
};

module.exports = Words;

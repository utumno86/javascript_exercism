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
        let words = text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            let temp = words[i].split('\n');
            if (temp.length > 1) {
                for (let j = 0; j < temp.length; j++) {
                    words.push(temp[j]);
                }
                words.splice(i, 1);
            }
        }
        for (let i = 0; i < words.length; i++) {
            let temp = words[i].split('\t');
            if (temp.length > 1) {
                for (j = 0; j < temp.length; j++) {
                    words.push(temp[j]);
                }
                words.splice(i, 1);
            }
        }
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '') {
                table[words[i]] = 0;
            }
        }
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '') {
                table[words[i]]++;
            }
        }
        return table;
    };
};

module.exports = Words;


let Bob = function() { };

Bob.prototype.hey = function(input) {
    punctuation = input.trim().slice(-1);
    if (input.toUpperCase() == input && input.toLowerCase() != input) {
        return 'Whoa, chill out!';
    } else if (punctuation == '?') {
        return 'Sure.';
    } else if ((input.trim().length < 1) || (punctuation == ' ')) {
        return 'Fine. Be that way!';
    } else {
        return 'Whatever.';
    }
};

module.exports = Bob;

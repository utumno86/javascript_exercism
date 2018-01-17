module.exports = function reverseString(input) {
    let reversedSring = '';
    for (let i = 0; i < input.length; i++) {
        reversedSring += input[(input.length - 1) - i];
    }
    return reversedSring;
};

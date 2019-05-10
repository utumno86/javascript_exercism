export const hey = (input) => {
    const punctuation = input.trim().slice(-1);
    if (input.toUpperCase() == input && input.toLowerCase() != input) {
        if (punctuation == '?'){
            return 'Calm down, I know what I\'m doing!'
        }
        return 'Whoa, chill out!';
    } else if (punctuation == '?') {
        return 'Sure.';
    } else if ((input.trim().length < 1) || (punctuation == ' ')) {
        return 'Fine. Be that way!';
    } else {
        return 'Whatever.';
    }
};
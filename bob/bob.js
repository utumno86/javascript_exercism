//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
  punctuation = input.slice(-1);
  if (input.toUpperCase() == input && input.toLowerCase() != input){
    return 'Whoa, chill out!';
  }
  else if (punctuation == '?'){
    return 'Sure.';
  }
  else if ((input.length < 1) || (punctuation == ' ')){
    return 'Fine. Be that way!';
  }
  else{
    return 'Whatever.';
  }
};

module.exports = Bob;

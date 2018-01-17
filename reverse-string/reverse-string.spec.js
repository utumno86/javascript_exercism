var reverseString = require('./reverse-string');

describe('ReverseString', function() {
  it('empty string', function() {
    let expected = '';
    let actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  it('a word', function() {
    let expected = 'tobor';
    let actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  it('a capitalized word', function() {
    let expected = 'nemaR';
    let actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  it('a sentence with punctuation', function() {
    let expected = '!yrgnuh ma I';
    let actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('a palindrome', function() {
    let expected = 'racecar';
    let actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });
});

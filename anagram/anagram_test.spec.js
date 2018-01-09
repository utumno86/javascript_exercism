var anagram = require('./anagram');

describe('Anagram', function() {
  it('no matches', function() {
    let subject = anagram('diaper');
    let matches = subject.matches(["hello", 'world', 'zombies', 'pants']);

    expect(matches).toEqual([]);
  });

  it('detects simple anagram', function() {
    let subject = anagram('ant');
    let matches = subject.matches(['tan', 'stand', 'at']);

    expect(matches).toEqual(['tan']);
  });

  it('does not detect false positives', function() {
    let subject = anagram('galea');
    let matches = subject.matches(['eagle']);

    expect(matches).toEqual([]);
  });

  it('detects multiple anagrams', function() {
    let subject = anagram('master');
    let matches = subject.matches(['stream', 'pigeon', 'maters']);

    expect(matches).toEqual(['stream', 'maters']);
  });

  it('does not detect anagram subsets', function() {
    let subject = anagram('good');
    let matches = subject.matches(['dog', 'goody']);

    expect(matches).toEqual([]);
  });

  it('detects anagram', function() {
    let subject = anagram('listen');
    let matches = subject.matches(['enlists', 'google', 'inlets', 'banana']);

    expect(matches).toEqual(['inlets']);
  });

  it('detects multiple anagrams', function() {
    let subject = anagram('allergy');
    let matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  it('detects anagrams case-insensitively', function() {
    let subject = anagram('Orchestra');
    let matches = subject.matches(['cashregister', 'Carthorse', 'radishes']);

    expect(matches).toEqual(['Carthorse']);
  });

  it('does not detect a word as its own anagram', function() {
    let subject = anagram('banana');
    let matches = subject.matches(['Banana']);

    expect(matches).toEqual([]);
  });

  it('matches() accepts string arguments', function() {
    let subject = anagram('ant');
    let matches = subject.matches('stand', 'tan', 'at');

    expect(matches).toEqual(['tan']);
  });

  it('matches() accepts single string argument', function() {
    let subject = anagram('ant');
    let matches = subject.matches('tan');

    expect(matches).toEqual(['tan']);
  });
});

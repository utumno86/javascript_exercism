var words = require('./word_count');

describe('words()', function() {
  it('counts one word', function() {
    let expectedCounts = {word: 1};
    expect(words('word')).toEqual(expectedCounts);
  });

  it('counts one of each', function() {
    let expectedCounts = {one: 1, of: 1, each: 1};
    expect(words('one of each')).toEqual(expectedCounts);
  });

  it('counts multiple occurrences', function() {
    let expectedCounts = {one: 1, fish: 4, two: 1, red: 1, blue: 1};
    expect(words('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  it('includes punctuation', function() {
    let expectedCounts = {car: 1, ':': 2, "carpet": 1, "as": 1, "java": 1, 'javascript!!&@$%^&': 1};
    expect(words('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  it('includes numbers', function() {
    let expectedCounts = {testing: 2, 1: 1, 2: 1};
    expect(words('testing 1 2 testing')).toEqual(expectedCounts);
  });

  it('respects case', function() {
    let expectedCounts = {go: 1, Go: 1, GO: 1};
    expect(words('go Go GO')).toEqual(expectedCounts);
  });

  it('counts properly international characters', function() {
    let expectedCounts = {"¡Hola!": 1, '¿Qué': 1, 'tal?': 1, 'Привет!': 1};
    expect(words('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  it('counts multiline', function() {
    let expectedCounts = {hello: 1, world: 1};
    expect(words('hello\nworld')).toEqual(expectedCounts);
  });

  it('counts tabs', function() {
    let expectedCounts = {hello: 1, world: 1};
    expect(words('hello\tworld')).toEqual(expectedCounts);
  });

  it('counts multiple spaces as one', function() {
    let expectedCounts = {hello: 1, world: 1};
    expect(words('hello  world')).toEqual(expectedCounts);
  });

  it('does not count leading or trailing whitespace', function() {
    let expectedCounts = {Introductory: 1, Course: 1};
    expect(words('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  it('handles properties that exist on Object’s prototype', function() {
    let expectedCounts = {reserved: 1, "words" : 1, "like" : 1, prototype: 1, "and" : 1, "toString": 1, "ok?": 1};
    expect(words('reserved words like prototype and toString ok?')).toEqual(expectedCounts);
  });
});

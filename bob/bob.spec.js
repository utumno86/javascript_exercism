var Bob = require('./bob.js');

describe('Bob', function() {
  let bob = new Bob();

  it('stating something', function() {
    let result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  xit('shouting', function() {
    let result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('asking a question', function() {
    let result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  xit('talking forcefully', function() {
    let result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  xit('using acronyms in regular speech', function() {
    let result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  xit('forceful questions', function() {
    let result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting numbers', function() {
    let result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('only numbers', function() {
    let result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  xit('question with only numbers', function() {
    let result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  xit('shouting with special characters', function() {
    let result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting with umlauts', function() {
    // NOTE: "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    let result = bob.hey('\xdcML\xc4\xdcTS!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('calmly speaking about umlauts', function() {
    let result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).toEqual('Whatever.');
  });

  xit('shouting with no exclamation mark', function() {
    let result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('statement containing question mark', function() {
    let result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  xit('prattling on', function() {
    let result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  xit('silence', function() {
    let result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

   xit('prolonged silence', function() {
    let result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});

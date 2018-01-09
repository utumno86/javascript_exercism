let TwoFer = function() {};

TwoFer.prototype.twoFer = function(who) {
  return who ? 'One for ' + who + ', one for me.' : 'One for you, one for me.';
};

module.exports = TwoFer;

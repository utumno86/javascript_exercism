let Transcribe = function () {}

Transcribe.prototype.toRna = function (strand) {
  let NewStrand = strand.split('');
  let transcription = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'};
  return NewStrand.map(function(element) {
    return transcription[element];
  }).join('');
};

module.exports = Transcribe;

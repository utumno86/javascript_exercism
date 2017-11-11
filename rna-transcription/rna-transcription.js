var Transcribe = function () {}

Transcribe.prototype.toRna = function (strand) {
  var NewStrand = strand.split('')
  var transcription = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'}
  return NewStrand.map(function (element) {
    return transcription[element]
  }).join('')
}

module.exports = Transcribe

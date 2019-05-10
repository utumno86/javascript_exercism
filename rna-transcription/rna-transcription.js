export const toRna = (strand) => {
    let NewStrand = strand.split('');
    let transcription = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'};
    return NewStrand.map(function(element) {
        if (transcription[element]) {
            return transcription[element];
        } else {
            throw new Error('Invalid input');
        }
    }).join('');
};
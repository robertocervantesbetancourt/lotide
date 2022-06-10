

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  // console.log(result);
  return result;
};

module.exports = countLetters;

// const result1 = countLetters('lighthouse in the house');
// console.log(result1);

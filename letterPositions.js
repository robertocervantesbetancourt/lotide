//returns an object where the key is a letter (of the sentence) and the value is the location(s) of that letter in the sentence

const letterPositions = function(sentence) {
  const result = {};
  let index = 0;
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter].push(index);
      index++;
    } else {
      result[letter] = [];
      result[letter].push(index);
      index++;
    }
  }
  return result;
};

module.exports = letterPositions;




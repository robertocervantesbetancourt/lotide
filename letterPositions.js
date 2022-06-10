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
  //console.log(result);
  return result;
};

module.exports = letterPositions;




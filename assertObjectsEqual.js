//Assertion to check eqObject function

const assertObjectsEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
    return;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
    return;
  }
};

module.exports = assertObjectsEquals;

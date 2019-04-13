// Note that these are just one of many possible solutions!
// Provided for reference, please try to solve the problem on your own before reviewing this!



var createBase = function(baseNumber) {
  return function(n) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + n;
  };
};
// Note that these are just one of many possible solutions!
// Provided for reference, please try to solve the problem on your own before reviewing this!


function Calculator() {
  this.add = function(input){
    return function() {
      var result = 0;
      for (var i = 0; i < input.length; i++) {
        result = result + input[i];
      };
      return result;
    }();
  };

  this.multiply = function(input){
    return function() {
      var result = 1;
      for (var i = 0; i < input.length; i++) {
        result = result * input[i];
      };
      return result;
    }();
  };

  // Instead of writing more repetitive code like above let's try use a helper function to save time!
  this.subtract = function(input){
    return operation(input, function(result, input) { 
      return result - input; 
    });
  };
  
  this.divide = function(input){
    return operation(input, function(result, input) { 
      return result / input; 
    });
  };

  function operation(input, operator) {
    var result = input.shift();
    for(var i = 0; i < input.length; i++){
      result = operator(result, input[i]);
    };
    return result;
  };
};
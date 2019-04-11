// Note that this is just one of many possible solutions!
// Provided for reference, please try to solve the problem on your own before reviewing this!

function Calculator() {
  var operator = function(result, input) { 
    return result + input; 
  };
  this.add = function(input){
    return operation(input, operator);
  };

  this.multiply = function(input){
    return operation(input, function(result, input) {
      return result * input; 
    });
  };

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
    for(i = 0; i < input.length; i++){
      result = operator(result, input[i]);
    };
    return result;
  };
};
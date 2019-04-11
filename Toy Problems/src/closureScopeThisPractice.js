/*
Create a calculator that takes in an array of numbers and will add, subtract, multiply or divide the values of the
passed in array.


*/

function Calculator() {
  var operator = function(result, input) { 
    return result + input; 
  };
  this.add = function(input){
    return function() {
      var result = 0;
      for (var i = 0; i < input.length; i++) {
        result = result + input[i];
      }
      return result;
    }();
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
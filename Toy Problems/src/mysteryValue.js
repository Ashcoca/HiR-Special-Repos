/*
This problem is a little different. You won't be coding anything, your goal is
to follow along with what's happening in this already built function. This
problem will test your understanding of scopes and closures.

Note: There are no spec tests for this problem. 

DO NOT CHANGE ANYTHING!!

GOAL: Find the value of the *result* variable
*/


var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery ( input ){
  var secret = 4;
  input += 2;
  function mystery2 ( multiplier ) {
    multiplier *= input;
    return secret * multiplier;
  };
  return mystery2;
};

function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus;
  };
  return mystery4;
};
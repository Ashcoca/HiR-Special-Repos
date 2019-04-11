// *Step 1 - Find what is in var hidden
// mystery is run with the input of 3, the return value is mystery2
// hidden contains scope of ...
// secret = 4;
// input = 5 (the 3 from the input then the +2 from the expression on line 10)

var hidden = function mystery2 ( multiplier ) {
  multiplier *= 5;
  return 4 * multiplier;
}


// *Step 2 - Find what is in var jumble
// var jumble contains the return value of mystery3, what is returned in mystery3?

var jumble = function mystery4( bonus ){
  return param(6) + bonus;
}


// *Step 3 - Find the Value of Result

var result = jumble( 2 );

// pass 2 into 'bonus'

function mystery4( 2 ) {
return param(6) + 2
}

// uh oh? what is the value of param?
// param is the paramter passed to mystery3
// but wait? we already passed a parameter to mystery3 when we defined Jumble

var jumble = mystery3( hidden );

// hidden contains

var hidden = function mystery2( multiplier ) {
  multiplier *= input;
  return secret * multiplier;
}

// So we just replace the param with hidden, since that is already passed to mystery3
// Ultimatley the (6) is the value of the paramter multiplier


var jumble = function mystery4( 2 ) {
return hidden(6) + 2;
}
//You probably still remember that 'hidden' was nothing else,
//but our version of the mystery2 function, which is run here with
//6 as an argument. In this case, hidden becomes:

var hidden = function mystery2( 6 ) {
return 6 * 5 * 4;
}

// hidden returns 120, then look back into jumble, we still have to add 2, the final answer is 122
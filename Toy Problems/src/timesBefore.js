/* 
Write a function that takes the number of times the callback needs to be called before 
being executed as the first parameter and the callback as the second parameter

Example Output:
var called = function() {
	console.log('hello');
};

var afterCalled = calledWhenReady(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
*/

function calledWhenReady(timesBefore, callback) {
  // YOUR CODE HERE
};
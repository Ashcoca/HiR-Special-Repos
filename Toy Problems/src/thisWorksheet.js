/*******************************/
/*   Setting up the examples   */
/*******************************/

var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
  this.name = 'Sally';
  // Additional console.logs and test if you're curious!
  // console.log('This inside inAFunction is...', this);
  // this.test4 = whatIsThis;
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. 

// You can copy this entire file into a repl or a snippet.
// Run through each of the examples one by one (commenting out the
// previous example and uncommenting the current example as necessary). 
// Try to figure out what 'this' will refer to before you run the code!

// In the comments section below each example fill in what `this` is referencing 
// inside of the whatIsThis function. In the because section explain why. 
// If it throws an error, why is it throwing an error?


// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... 
// * because ... 




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ... 
// * because ... 




// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ... 
// * because ... 




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ...
// * because ... 




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... 
// * because ... 




// * Problem 6
// whatIsThis.call();
// * "this" is ... 
// * because ... 




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ... 
// * because ... 




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... 
// * because ... 




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... 
// * because ... 




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ... 
// * because ... 




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ... 
// * because ... 




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...
// * because ...




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ...
// * because ... 




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... 
// * because ... 




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ... 




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... 
// * because ... 




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test4('now', 'what');
// newObject.test3('C', 'D');
// * "this" is ... 
// * because ... 




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... 
// * because ... 




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... 
// * because ...
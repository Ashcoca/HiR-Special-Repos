// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ...    Window Object
// * because ...      Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.





// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ...    Window Object
// * because ...      This is implicitely bound to the window, but the terminal does not have a browser, so it will through an error.





// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ...    the inAnObject obj
// * because ...      Whenever a function is called by a preceding dot, the object before that dot is bound to this






// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ...    an Error
// * because ...      There is no test1 method in the anotherObject




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ...    anotherObject
// * because ...      When a function is called (in this case test2), by a preceding dot, the object before 
//                    that dot (in this case anotherObject) is "this."




// * Problem 6
// whatIsThis.call();
// * "this" is ...    Window
// * because ...      When you use call, "this" will usually be applied to the first parameter. 
//                    Since this has no parameter, it will be applied to the "whatIsThis" function, which makes 'this' the window object





// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ...    trickyTricky Object
// * because ...      Whenever JavaScript’s call or apply method is used, this is explicitly defined as the trickyTricky obj
//                    




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...    trickyTricky Object
// * because ...      'this' is bound to the first parameter. The additional parameters will be used as arguments for the whatIsThis function




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ...    confusing object
// * because ...      Similar to the above, call explicitly defines 'this' to the passed in object




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ...    confusing object
// * because ...      Like problem 8, the first parameter is defined as 'this' and the additional parameters are passed
//                    in as the first argument to whatIsThis 




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ...    trickyTricky
// * because ...      The 'apply' method works just like 'call' in this situation. Apply will bind to 'this' the first parameter(argument)





// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...    confusing object
// * because ...      Just like above, 'apply' will set the first argument (in this case confusing), to be what this refers to. 
//                    Remember, first parameter in '.apply' = this.
//                    The array is used as the arguments for whatIsThis, so that's why we get a and b logged as nice & job.






// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ... Error
// * because ... apply wants to only deal with objects




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... Window
// * because ... this must always be an Object, so it defaults to the Window




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ... Error
// * because ... No function exists




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... Window
// * because ... this must always be an Object




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ... first Window then the inAFunction
// * because ... first this is Window, then a new object is created and this
// 								becomes the focus of that




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... trickyTricky object
// * because ... call applies this to the argument, this must always be an Object




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... confusing object
// * because ... apply applies this to the argument, this must always be an Object
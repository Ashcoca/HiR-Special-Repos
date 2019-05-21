# Understanding Scope


### Recommended Reading
1. https://scotch.io/tutorials/understanding-scope-in-javascript
2. https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53
3. https://codeburst.io/javascript-learn-understand-scope-f53d6592c726
4. https://blog.codeanalogies.com/2017/11/22/how-javascript-variable-scoping-is-just-like-multiple-levels-of-government/

### Recommended Videos
1. https://youtu.be/SBwoFkRjZvE - Javascript is Weird - Scopes
2. https://youtu.be/iJKkZA215tQ - Javascript Scope, Local vs Global

### Additional Resources
1. Udacity Course - Scopes (Lesson 1) - https://classroom.udacity.com/courses/ud015
2. A tool for visualizing Execution Context, Hoisting, Closures, and Scopes in JavaScript -- https://tylermcginnis.com/javascript-visualizer/


### Scope Examples
```javascript
function add2(x) {
 return function (y) {
  return x+y;
 }
}

console.log(add2(5)(2)); // 7 we are pre-passing a variable to the nested function
```
```javascript
function a() {
 var x = 1;
 function y() {
   var y = 2;
   return x + y;
 }
  console.log(y); // undefined, you can't access y here
  console.log(y()) // 3
}
```
```javascript
function a() {
 var x = 1; 
 function y() {
   y = 2; // var keyword omitted giving global scope
   return x + y;
 }
  console.log(y); // 2 global scope access is granted to y
  console.log(y()) // 3
}
```


### Scopes Adventure!
> Try to follow along with this adventure! Paste it into a snippet and try running it and see if you can understand why it works!
```javascript
// once upon a time, there was a princess
var Princess = function() {

    // who rode around her world on a unicorn, battled dragons, encountered talking animals, and many other fantastical things.
    var unicorn = {
        name: 'Sparkles'
    };
    var dragons = [
        'A green one with purple wings',
        'A mean black one who breathed fire',
        'A fluffy white one that looked like a dog'
    ];
       
    var talkingAnimals = {
        squirrel: "Hello!"   
    };
    
    // and lived in a wonderful world full of adventures
    var adventures = [
        'My unicorn ' + unicorn.name + ' had a baby!',
        'I fought ' + dragons.length + ' dragons!',
        'I met a talking squirrel who said "' + talkingAnimals.squirrel + '"'
    ];

    // but she would always have to return back to her dull world of chores and grown-ups
    return {
        // and she would often tell them of her latest amazing adventure as a princess
        story: function() {
            return adventures.pop();
        }
    };
};

// but all they could see is a little girl
var littleGirl = new Princess();
window.console.log(littleGirl);

// telling stories about magic and fantasy
window.console.log(littleGirl.story());
window.console.log(littleGirl.story());
window.console.log(littleGirl.story());
```
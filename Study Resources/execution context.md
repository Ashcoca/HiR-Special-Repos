# Understanding Execution Context


### Recommended Reading
1. https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
2. https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/
3. https://www.valentinog.com/blog/context/

### Recommended Videos
1. https://youtu.be/FJNRmUdLlfw
2. https://youtu.be/W8AeMrVtFLY - Call stack

### Additional Resources
1. https://tylermcginnis.com/javascript-visualizer/ -- A tool for visualizing Execution Context, Hoisting, Closures, and Scopes in JavaScript

### Execution Context Examples
 Look at the code below and try to predict what will be logged on each of the 6 lines
 ```javascript
var myString = "I'm outside";

function f() {
    console.log(myString); // 2
    var myString = "I'm in function";
    console.log(myString); // 3
 
    for (var i = 0; i < 1; ++i) {
        var myString = "I'm in for";
        console.log(myString); // 4
    }
    console.log(myString); // 5
 }

console.log(myString); // 1 
f();
console.log(myString); // 6
```
Once you've made a prediction scroll down to see the actual results
.
.
.
```
1. "I'm outside" 
2. undefined
3. "I'm in function"
4. "I'm in for"
5. "I'm in for" 
6. "I'm outside
```
From: https://weeklywebwisdom.com/2017/09/08/javascript-execution-context-and-scope/
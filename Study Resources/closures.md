# Understanding Closure


### Reading Resources:
1. https://css-tricks.com/javascript-scope-closures/
2. https://medium.freecodecamp.org/javascript-closures-explained-by-mailing-a-package-4f23e9885039 -- My favorite
3. https://prettydiff.com/2/guide/closure_with_jsscope.xhtml
4. https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md
5. https://medium.com/@samkwon521/eli5-closures-c0018a23e3c5

### Recommended Videos
1. https://youtu.be/ZqGFKcCcO-Y
2. https://youtu.be/71AtaJpJHw0
3. https://youtu.be/O312eN5J2bc -- Multi-Part Series, In-Depth

### Additional Resources
1. Why global state/variables are bad and alternatives: https://softwareengineering.stackexchange.com/questions/148108/why-is-global-state-so-evil/148154#148154
2. Udacity Course - Closures (Lesson 2) - https://classroom.udacity.com/courses/ud015
3. https://tylermcginnis.com/javascript-visualizer/ -- A tool for visualizing Execution Context, Hoisting, Closures, and Scopes in JavaScript



## Common Questions
**1. Why are closures so important?**
> Closures have a few advantages. One is that variables contained in closure scope don't pollute the global namespace which can help prevent collisions with other libraries or parts of your app. 

> Think about this: Local variables are defined and used within a function, whereas global variables are defined for the function window. In short, until the code terminates, global variables will be present, lurking in the background, using memory. Although variables storing little data won’t be too critical, if you store a lot of data in it it’ll choke your bandwidth and definitely threaten the page efficiency. Too much data stored as cache slows the speed of your browser, resulting in high latency. Caches are a website’s data that are stored and used when you revisit the site time and again.

**2. What's a practical use for closures in the real world?**
> Suppose you wanted to count the number of times a user clicked on a button on your webpage. To do this you'd trigger a function onClick event for the button to update the count of the variable.

> Let's consider some of the ways we could accomplish this. 
1. You could use a *global variable* and a function to increase the counter
```javascript
var counter = 0;
function updateClickCount() {
    ++counter;
    // do something with counter
}
```
> But the problem here is any script on the page can change the counter without calling updateClickCount().

2. What if we declared the variable inside our function?
```javascript
function updateClickCount() {
    var counter = 0;
    ++counter;
    // do something with counter
}
```
> But now every time we call updateClickCount we're resetting the counter variable!

3. Ok, well how about a *nested function*?
Nested functions have access to the scope that's above them. In this example updateClickCount can access the counter variable that's contained in the countWrapper scope.
```javascript
function countWrapper() {
    var counter = 0;
    function updateClickCount() {
    ++counter;
    // do something with counter
    }
    updateClickCount();    
    return counter; 
}
```
> We're close, but we can't access the updateClickCount function from the outside, and we still need to figure out how to execute counter = 0 only once and not everytime.

4. Let's try using closure with a self invoking function (IIFE)
```javascript
 var updateClickCount=(function(){
    var counter = 0;

    return function(){
     ++counter;
     // do something with counter
    }
})();
```
> Let's take a look at how this works. First of all the self invoking function runs only once. It set's the counter to 0 and returns a function expression. This way updateClickCount becomes a function! And it still has access to the counter variable stored in it's parent's scope. We've created a private variable that is protected by the scope of the anonymous function and it can only be changed when we call UpdateClickCount!

Here's an expanded example of the above code
```javascript
  <script>
    var updateClickCount=(function(){
    var counter=0;

    return function(){
    ++counter;
     document.getElementById("spnCount").innerHTML=counter;
    }
  })();
</script>

<html>
 <button onclick="updateClickCount()">click me</button>
  <div> you've clicked 
    <span id="spnCount"> 0 </span> times!
 </div>
</html>
```
> Please note though that while a closure doesn't need to be a self-invoking function, it can be. When a closure is self invoking (i.e. immediately called by adding () after the function), this means the return value is immediately calculated, rather than the function being returned and the return value being calculated later once the function is invoked. A closure can actually be any function within another function, and its key characteristic is that it has access to the scope of the parent function including it's variables and methods
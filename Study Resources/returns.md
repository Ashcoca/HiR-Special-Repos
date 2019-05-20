# Understanding Returns

The basics of return statements:
1. Every function in Javascript returns undefined unless *otherwise specified*
2. Return statements end function execution
3. Return statements return a value to the function caller


### Recommended Reading
1. https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c - Expands on above basics w/ examples
2. https://hackernoon.com/some-thoughts-on-the-return-statement-9d99771f2838



### Recommended Videos
1. https://youtu.be/AdQcd3sKGC8 - The Return Statment
2. https://youtu.be/qRnUBiTJ66Y - Functions and Returns
3. https://youtu.be/gdGmpTcNZXQ - Beginners Return Statement Tutorial


### Return Example
> You have 10 + 2 + 5 + 3 written on a whiteboard and you want to solve it. How do you do this?

> You start with the first operation, 10 + 2. That's 12, so you wipe 10 + 2 off the board and replace it with the number 12. Now the whiteboard reads 12 + 5 + 3. So you do it again: 12 + 5 = 17, so you wipe off 12 + 5 and replace it with the result, 17. Now it says 17 + 3. Well that's 20, so you wipe it off again and just write 20, the result. 

> Makes sense? Now imagine instead the board reads:
```javascript
add(10, 2) + add(5, 3)
```
> This is the exact same thing. add is a function, and it takes two arguments, the numbers to add together. When it's calculated the result, the text "add(10, 2)" will be wiped off the board and be replaced by that result. This function would be written:
```javascript 
function add(num1, num2) {
    return num1 + num2;
}
```
> and after running it the whiteboard would read: 12 + 8. The keyword return means *this function is done, now place this value at the point where it was called.* When a function completes, it is wiped off the whiteboard, and whatever was returned by it is written in its place.

> Now let's look at this and try to imagine the same thing:
```javascript
function Food() {
    return "strawberry";
}

myFave = Food();
```
> If I say console.log(myFave) what do you think will get logged? Well, Food() will be executed. It will complete, and because "strawberry" is returned, that last line essentially becomes 
```javascript
myFave = "strawberry"
```


### Common Questions/Issues
1. What happens when you put a return statement inside of a for loop?
> A return statement will stop the execution of your for loop and return a value (if specified). This is a common mistake people make using return statements inside of a loop. As soon as your for loop hits that first return, it's going to exit the loop. If you need to store a value but want to continue looping, try exploring other options instead of using a return statement.
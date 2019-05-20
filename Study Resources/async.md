# Understanding Async

Understanding how asynchronous functions can affect your code in javascript can be tricky. Let's try to first understand the difference between **blocking** and **non-blocking** code.

1. Blocking aka synchronous code
This is the code you're likely most used to seeing at this point. Blocking or synchronous code waits for one action to complete before moving on and executing the next line of code.
2. Non-Blocking aka asynchronous code


### Recommended Reading
1. http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/
2. https://medium.com/dailyjs/asynchronous-adventures-in-javascript-understanding-the-event-loop-fc6f968d5f72

### Recommended Videos
1. https://youtu.be/YxWMxJONp7E - Part 1 of Series on Async
2. https://youtu.be/8aGhZQkoFbQ - Event Loop Explained
3. https://youtu.be/6MXRNXXgP_0 - Updated version of above


## Common Questions/Issues
1. What does it mean when people say Javascript runs on a single thread?
Essentially this means that one command can be processed at a time in Javascript.
2. What are the pros/cons of single threads vs multi-threads and other options?
* Synchronous/single thread: You handle one request at a time, each in turn. pros: simple. cons: any one request can hold up all the other requests
* Fork a new process: you start a new process to handle each request. pros: easy cons: does not scale well, hundreds of connections means hundreds of processes. fork() is the Unix programmer's hammer. Because it's available, every problem looks like a nail. It's usually overkill
* Threads: Start a new thread to handle each request. pros: easy, and kinder to the kernel than using fork, since threads usually have much less overhead cons: your machine may not have threads, and threaded programming can get very complicated very fast, with worries about controlling access to shared resources.
3. How does Javascript get around the limitations of running on a single thread?
By using something called the **event-loop** see Recommended Reading/Videos above for more information


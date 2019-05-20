# Understanding Closure

### Recommended Reading:
1. https://css-tricks.com/javascript-scope-closures/
2. https://prettydiff.com/2/guide/closure_with_jsscope.xhtml
3. https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md

### Recommended Videos
1. https://youtu.be/ZqGFKcCcO-Y
2. https://youtu.be/71AtaJpJHw0
3. https://youtu.be/O312eN5J2bc -- Multi-Part Series, In-Depth

### Additional Resources
1. Why global state/variables are bad and alternatives: https://softwareengineering.stackexchange.com/questions/148108/why-is-global-state-so-evil/148154#148154


### Common Questions
1. Why are closures so important?
> Closures have a few advantages. One is that variables contained in closure scope don't pollute the global namespace which can help prevent collisions with other libraries or parts of your app. 
>Think about this: Local variables are defined and used within a function, whereas global variables are defined for the function window. In short, until the code terminates, global variables will be present, lurking in the background, using memory. Although variables storing little data won’t be too critical, if you store a lot of data in it it’ll choke your bandwidth and definitely threaten the page efficiency. Too much data stored as cache slows the speed of your browser, resulting in high latency. Caches are a website’s data that are stored and used when you revisit the site time and again.
# DOM
## DOM- My understanding
- Document+Object+Model
- It helps us to see the whole HTML document as an Object and model it in JS using various functions.
- Basically, it helps us to refer and play around with various parts of an HTML elements using various functions and methods.

## Why do we even need DOM?
1. Most of the modern applications need changing the element on the website whenever the website is loaded/
2. Doing some operations at the backend and also displayong the outcome is where this is important.


## Difference between JS which runs on the browser and the JS specification.
Browser has some extra functionality as compared to the JS Specification.
For example: 
1. When we scroll down on LinkedIn/Instagram or on some social media, the rendeering of the new post happens depending on some feature(async feature) which is not provided by the JS Specification. Hoever, it is given in by the browser
2. Features like setTimeOut, http, fs are provided by NodeJS and not by JS Specification.

## My old notes on DOM
[Click here to go to Hashnode Article on DOM](https://98sunny.hashnode.dev/hands-on-dom-and-selectors-in-javascript-ck47jwg9b026bu4s1z8yjsgnt)

# Throttling and Debouncing

## Debouncing
1. We dont send out request immediately and we wait till a certain time to make sure some substantial input is given in and then the request is sent immediately.

2. This is a stretgy which is used to improve the performance of a feature by controlling the time at which the function should be executed.

3. Here a function is accepted and transformed into an debounced function so tha the code inside the original functionn is executed after a certain period of time.

4. If the debounced function is called again, then the timer is reset and a new timer starts for this debounced function call. Once that timer completes, the original funuction will kick in.

# Some useful links which I encountered as I was working on DOM:
[CORS in 6 minutes](https://www.youtube.com/watch?v=PNtFSVU-YTI)
[JS Throttling](https://www.geeksforgeeks.org/javascript-throttling/)
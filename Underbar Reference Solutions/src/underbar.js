(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    // If n is not defined, just return the first element.
    if (n === undefined) {
      return array[0];
    }
    // If n is defined we can use slice to return the correct n elements.
    return array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    // Similar to above, if n is undefined we'll just return the last element.
    if (n === undefined) {
      return array[array.length -1];
    }
    // We'll return the entire array if n is greater than the length of the entire array.
    if (n > array.length) {
      return array;
    }
    // Otherwise we'll just return the last n elements
    return array.slice(array.length - n, array.length);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    // We need to check if our collection is an object or an array
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        // Iterator takes in 3 arguments, see underbar docs for more info
        iterator(collection[i], i, collection);
      }
    } else {
      // We can safely assume if it's not an array then our collection is an object
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    };
    // No need to return anything!
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // Iterate through our array
    for (var i = 0; i < array.length; i++) {
      // Check if each index is our target, if it is, return that index
      if (array[i] === target) {
        return i;
      }
    };
    // If we complete our loop without finding our target, we return -1
    return -1;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var truthyValues = [];
    // We can use _.each to iterate!
    _.each(collection, function(value) {
      // We'll run the filter test over the current iteration, then push it to our output array if it passes
      if (test(value)) {
        truthyValues.push(value);
      }
    });
    return truthyValues;

    //* Basic for loop solution for reference
    // for (var i = 0; i < collection.length; i++) {
    //   if (test(collection[i])) {
    //     truthyValues.push(collection[i])
    //   }
    // };
    // return truthyValues;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    var falsyValues = [];
    _.each(collection, function(value) {
      if (!test(value)) {
        falsyValues.push(value);
      }
    });
    return falsyValues;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    // See the hint above on the _.identity problem to get an idea of why we need this line below!
    iterator = iterator || _.identity;

    var uniqValues = {};
    _.each(array, function(value) {
      var newValue = iterator(value);
      if (uniqValues[newValue] === undefined) {
        uniqValues[newValue] = value;
      }
    });
    // Uncomment to take a look at what's being stored in our uniqValues object!
    // console.log(uniqValues)

    // We need to output an array
    var results = [];
    for (var key in uniqValues) {
      results.push(uniqValues[key])
    };
    return results;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // We don't want to modify the input so we'll declare a new array
    var mappedArr = [];
    // Iterate over each value in the collection. We could use a for loop but let's use _.each instead
    _.each(collection, function(value, index, collection) {
      // Apply the iterator function to each value and push it to the mapped array
      mappedArr.push(iterator(value, index, collection));
    });
    return mappedArr;
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */
    return _.map(collection, function(element) {
      return element[key];
    });
    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    // Remember _.reduce should work with objects AND arrays!
    var isAcc = true;
    if (arguments.length === 2) {
      isAcc = false;
    };

    _.each(collection, function(value) {
      // If there is no accumulator
      if (!isAcc) {
        // Set the accumulator to the current value
        accumulator = value;
        isAcc = true;
      } else {
        accumulator = iterator(accumulator, value);
      }
    });
    return accumulator;
  };

  _.findIndex = function(array, iterator) {
    for (var i = 0; i < array.length; i++) {
      // If the current iteration passes our predicate test we return that index
      if (iterator(array[i])) {
        return i;
      }
    };
    // If nothing in our array passes the test then we'll return -1
    return -1;
  };

 // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    /* START SOLUTION */
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
    /* END SOLUTION */
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    /* START SOLUTION */
    iterator = iterator || _.identity;

    return _.reduce(collection, function(accumulator, item) {
      if (!iterator(item)) {
        accumulator = false;
      }
      return accumulator;
    }, true);
    /* END SOLUTION */
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    iterator = iterator || _.identity;

    return !_.every(collection, function(item) {
      return !iterator(item);
    });
    // If this is confusing try walking through it with this example:
    // Collection = [2, 4, 6]; Iterator = isEven test
    // What happens each step of the way? What if the collection is [2, 4, 5, 6]?
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    // The first argument is our target obj that we want to merge into
    var targetObj = arguments[0];
    // Let's loop through the arguments to find our other objects
    for (var i = 1; i < arguments.length; i++) {
      // We can give our current object a name just to make things more readable
      var currentObj = arguments[i];
      // Then we'll loop through all the keys in the currentObj and add them to our targetObj
      for (var key in arguments[i]) {
        targetObj[key] = currentObj[key];
      }
    };
    return targetObj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    /* START SOLUTION */
    var targetObj = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var currentObj = arguments[i];
      for (var key in arguments[i]) {
        if (targetObj[key] === undefined) {
          targetObj[key] = currentObj[key];
        }
      }
    };
    return targetObj;
    /* END SOLUTION */
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    /* START SOLUTION */

    // We'll use this var to keep track of whether or not our fn has run yet
    var hasRun = false;
    var results;
    return function() {
      if (!hasRun) {
        // Ex: We can use apply to ensure that the [2, 4, 6] are passed in -> _.once(isEven([2, 4, 6]))
        results = func.apply(this, arguments);
        hasRun = true;
      }
      return results;
    };
    /* END SOLUTION */
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    /* START SOLUTION */
    var memo = {};
    return function() {
      // We can stringify the arguments to allow for obj comparison
      var args = JSON.stringify(arguments);
      // If the fn has NOT been run with these arguments, we'll run it and store the results
      if (!memo[args]) {
        memo[args] = func.apply(this, arguments);  
      }
      return memo[args];
    };
    /* END SOLUTION */
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    /* START SOLUTION */
    // We can convert the arguments obj into an array and slice the arguments we need
    var args = Array.from(arguments).slice(2)
    setTimeout(function() {
      func.apply(this, args);
    }, wait);
    /* END SOLUTION */
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    /* START SOLUTION */
    var copyArr = array.slice();
    var shuffled = [];
    // We can use a helper function to get a random Index!
    var getRandomIndex = function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
    while (copyArr.length > 0) {
      var randomItem = getRandomIndex(copyArr.length);
      shuffled.push(copyArr[randomItem]);
      // Remove the random item from our copyArr
      copyArr.splice(randomItem, 1);
    };
    return shuffled;
    /* END SOLUTION */
  };


  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
    /* START SOLUTION */
    return _.map(collection, function(item) {
      // Check to see if it's a function or a key
      if (typeof functionOrKey === 'function') {
        return functionOrKey.apply(item, args);
      } else {
        // If it's a key...
        return item[functionOrKey].apply(item, args);
      }
    });
    /* END SOLUTION */
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
    /* START SOLUTION */
    if (typeof iterator === 'function') {
      return collection.sort(function(a, b) {
        return iterator(a) - iterator(b);
      });
    } else {
      return collection.sort(function(a, b) {
        return a[iterator] - b[iterator];
      });
    }
    /* END SOLUTION */
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
    /* START SOLUTION */

    /* END SOLUTION */
  };
}());

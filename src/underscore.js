var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {

  // var taco = [];
  if (typeof n === 'undefined') {
    return array[0];
  }
  // if n is greater than the array length, return array
  else if(array.length < n) {
    return array;
  }
  else {
   return array.splice(0,n);
  }
  //otherwise, return a new array starting from the beginning and going until
  },



  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
  // var taco = [];
  if (typeof n==="undefined") {
    return array[array.length-1];
  }

// should accept an index argument

  else if (n===0) {return null;}

  else if (array.length < n) {
    return array;
  }

  else {
    return array.splice(0,n);
  }


  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
  var taco = [];
  array.forEach(
    function(elem)  {
    if(taco.indexOf(elem) === -1) {
      taco.push(elem);
    }

    });
  return taco;
  },


  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their names
  pluck: function(array, key) {
    var powerCouple = [{name : "Yoni", age: 25}, {name:"Maia", age: 25}];
    filterArray = array.map(function(item) {
      return item[key];
    });
    return filterArray;
    // return powerCouple;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(a, target) {
    var result = false;
    a.forEach( function(elem)  {
      if (elem === target){
        result = true;
      }
    });
    return result;
  }
};

// var sum = array.reduce()
  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array


//   flatten: function(array) {
//   var taco = [];

//   }
// };
module.exports = myFunctions;

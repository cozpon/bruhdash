var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function(array){
    var firstArray = array[0];
    return firstArray;
  },

  // returns the last element of an array
  last: function(array){
    var lastElement = array.pop();
    return lastElement;
  },

  // returns the index of the first matching element from left to right
  indexOf: function(array, number) {
    for (var i = 0; i < array.length; i++){
      if (array[i] === number){
        return i;
        } else if (i === array.length - 1){
          return -1;
      }
    }
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function(array, number) {
    for (var i = array.length - 1; i >= 0; i--){
      if (array[i] === number){
        return i;
        } else if (i === 0){
          return -1;
      }
    }
  },

  // returns an array with all elements except for the last element
  initial: function(array) {
    array.pop();
    return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var falsy;
    var truesey = [];
    for (i = 0; i < arr.length; i++) {
       falsy =  Boolean(arr[i]);
        if (falsy === true) {
        truesey.push(arr[i]);
        }
    }
    return truesey;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function(arr, start, end) {
    var slicedArr = []
    for (var i = start; i < end; i++) {
      slicedArr[slicedArr.length] = arr[i] 
    }
    return slicedArr;
  },

  // returns a slice of array with n elements dropped from the beginning
   drop: function(arr, num){
     var dropArr = [];
     for(var i = 0; i < arr.length; i++){
       if(i >= num){
         dropArr.push(arr[i]);
       } else if(num === undefined){
         arr.splice(0, 1);
         return arr;
       }
     }
     return dropArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === undefined){
      arr.pop();
    } else {
      for (var i = 0; i < n; i++){
        arr.pop();
      }
    }
    return arr;
  },


  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    var slicedArray = [];
    var undArray = [];

    if (n === 0){
      return [];
    } 
    if (n > arr.length){
      return arr;
    }
    if (n === undefined){
      undArray.push(arr[0]);
      return undArray;    
    } 
    for (var i = 0; i < n; i++){
      slicedArray.push(arr[i]);
      }
    return slicedArray;
    },

  // creates a slice of an array with n elements taken from the end
 takeRight: function (arr, n) {
    var slicedRight = [];
    if (n === 0){
      return [];
    } 
    if (n > arr.length){
      return arr;
    } 
    if (n === undefined){
        return arr.slice(-1)
    }
      for (var i = arr.length - 1; i >= n - 1; i--){
        slicedRight.push(arr[i]);
      } 
    return slicedRight.sort();
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, value, start, end) {
      var valAmount = end - start;
      var filled = 0;
      console.log(filled, "filled start");
      console.log(arr, "arr start");
      console.log(value, "value start");
      console.log(start, "start");
      console.log(end, "end");
      if (start === undefined && end === undefined){
        return arr.fill(value, start, end);
      

        console.log(arr, "new");
      
      } else { 
        for (var i = 0; i < valAmount; i++){
        arr.splice(start, 1, value);
        start++;
      }
     
      return arr;
  }
  },
  // removes all given values from an array
    // if array has certain given values, return array without values
  pull: function (arr, val) {
      var valueIndex = arr.indexOf(val);
      var vLength = val.length + 1;
      arr.splice(valueIndex, vLength);
    
    return arr;

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, val) {
      console.log(arr, "arr");
      console.log(val, "valuesIndex");
      var counter = 0;

      for(var i = 0; i < val.length; i++){
        arr.splice((val[i] - counter++), 1);
    }
      return arr; 

  },
 
  // creates an array excluding all the specified values
  without: function(arr, val) {
   
    for (var i = 0; i < val.length; i++){
      var valIndex = arr.indexOf(val[i]);
      arr.splice(valIndex, 1);
      
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    var diffArr = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        diffArr.push(arr1[i]);
      }
    }
    return diffArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr, values) {
   var newArray = [];
    for(var i = 0; i < arr.length; i++){
       var smallArr = [];
        smallArr.push(arr[i], values[i]);
        newArray.push(smallArr);
     }
      return newArray;
   }, 

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function (){
  

  
  },
  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
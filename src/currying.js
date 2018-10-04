const _ = require('ramda');

/*****************************************
      C U R R Y I N G  E X A M P L E
******************************************/

// We've got a nice multiply function.
// It takes two arguments.

// console.log( _.multiply(3, 4) );

// But it has been secretly curried already 
// so we can feed it fewer arguments and it 
// will return a new function.
//
// How about making a function to double a 
// value? Done.
let double = _.multiply(2);

/*****************************************
               Y O U R  T U R N
******************************************/

// _.split pulls a string apart around a
// given value
// console.log( _.split('i', 'mississippi') );

// -- Challenge 1 ------------------------
// Make a function called "words" which 
// returns a list of words in a string.
// Use only the split function and
// currying.

// console.log("Testing challenge 1...");

let words = _.split(' ');


// -- Challenge 2 ------------------------
// Create a function to triple every
// number in a list using only
// _.multiply and _.map.

// console.log("Testing challenge 2...");

let tripleList = _.map(_.multiply(3));

// -- Challenge 3 ------------------------
// Create a function to find the largest
// number in a list. You can use the
// greater(a,b) function which returns the
// greater of its two inputs. You can do
// this with currying and one of the list
// functions _.map, _.filter, or _.reduce.

// console.log("Testing challenge 3...");

let greater = function(a,b) {
  return a > b ? a : b;
};

let max = _.reduce(greater, _.reduced);

let myMap = _.curry(function mapper (mapperFn, list) {
    let concatList = (acc, ele) => _.concat(acc, [mapperFn(ele)]);
    return _.reduce(concatList, [], list);
});

module.exports = {
    double,
    words,
    tripleList,
    greater,
    max,
    myMap
};
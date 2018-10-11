let _ = require('ramda');
let P = require('pointfree-fantasy');
let { Identity } = require('pointfree-fantasy/instances/identity');
let Maybe = require('pointfree-fantasy/instances/maybe');
let map = P.map;
let compose = P.compose;

// Exercise 1
// ==========
// Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor

let ex1 = map(_.add(1));

// Exercise 2
// ==========
// Use _.head to get the first element of the list
let ex2 = map(_.head)

// Exercise 3
// ==========
// Use safeGet and _.head to find the first initial of the user
let safeGet = _.curry((x, o) => Maybe(o[x]))
let ex3 = compose(map(_.head), safeGet('name'));

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement
// function(n) {
//   if(n){
//     return parseInt(n);
//   }
// }
let ex4 = _.compose(map(parseInt), Maybe);

module.exports = {
    ex1,
    ex2,
    ex3,
    ex4
};

const _ = require('ramda');
const get = _.curry(function(x, obj) { return obj[x]; });

/******************************************
    C O M P O S I T I O N  E X A M P L E
******************************************/

// Curried functions are easy to compose.
// Using _.map, _.size, and _.split we can
// make a function that returns the lengths
// of the words in a string.

const lengths = _.compose(
    _.map(_.length), _.split(' ')
);

// -- Challenge 1 -------------------------
// Return a list of the author names in
// articles using only get, _.compose, and
// _.map.

const names = _.map(_.compose(get('name'), get('author')));


// -- Challenge 2 -------------------------
// Make a boolean function that says whether
// a given person wrote any of the articles.
// Use the names function you wrote above
// with _.compose and _.contains.

function isAuthor (author, articles) {
    return _.compose(_.contains(author), names)(articles);
}

// -- Challenge 3 -------------------------
// There is more to point-free programming
// than compose! Let's build ourselves
// another function that combines functions
// to let us write code without glue variables.

const fork = _.curry(function(lastly, f, g, x) {
    return lastly(f(x), g(x));
});
  
// As you can see, the fork function is a
// pipeline like compose, except it duplicates
// its value, sends it to two functions, then
// sends the results to a combining function.
//
// Your challenge: implement a function to
// compute the average values in a list using
// only fork, _.divide, _.sum, and _.size.

const avg = fork(
    _.divide,
    _.sum,
    _.length
);

module.exports = {
    lengths,
    names,
    isAuthor,
    avg
};
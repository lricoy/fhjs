const fns = require("./functors");
let _ = require('ramda');
let P = require('pointfree-fantasy');
let { Identity } = require('pointfree-fantasy/instances/identity');
let Maybe = require('pointfree-fantasy/instances/maybe');
let map = P.map;
let compose = P.compose;

test("Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor", () => {
  expect(fns.ex1(Identity(2))).toStrictEqual(Identity(3));
});

test("Use _.head to get the first element of the list", () => {
    let xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
    expect(Identity('do')).toStrictEqual(fns.ex2(xs));
    console.log("exercise 2...ok!")
});

test('Use safeGet and _.head to find the first initial of the user', () => {
    const user = {id: 2, name: "Albert"}
    expect(Maybe('A')).toEqual(fns.ex3(user))
});

test('Use Maybe to rewrite ex4 without an if statement', () => {
    expect(Maybe(4)).toEqual(fns.ex4("4"))
});

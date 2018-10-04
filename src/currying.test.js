const fns = require("./currying");

test("adds 1 + 2 to equal 3", () => {
  expect(fns.double(13)).toEqual(26);
});

test("words works", () => {
  expect(fns.words("one two three")).
  toEqual(["one", "two", "three"]);
});

test('it should triple every number in a list', () => {
    expect(fns.tripleList([1,2,3])).toEqual([3,6,9]);
});

test('it should find the largest number in a list', () => {
    expect(fns.max([1,-3483,9,7,2])).toEqual(9);
    expect(fns.max([-21,-3483,-2,-1])).toEqual(-1);
});

test('it should map every item on the list', () => {
    expect(fns.myMap(s => s.toUpperCase(), ['a', 'b', 'c'])).toEqual(['A', 'B', 'C']);
    expect(fns.myMap(s => 1, ['a', 'b', 'c'])).toEqual([1, 1, 1]);
});
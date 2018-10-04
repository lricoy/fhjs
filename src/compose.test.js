const fns = require("./compose");

var articles = [
  {
    title: "Everything Sucks",
    url: "http://do.wn/sucks.html",
    author: {
      name: "Debbie Downer",
      email: "debbie@do.wn"
    }
  },
  {
    title: "If You Please",
    url: "http://www.geocities.com/milq",
    author: {
      name: "Caspar Milquetoast",
      email: "hello@me.com"
    }
  }
];

test("it gets a list with the length of every word", () => {
  expect(fns.lengths("once upon a time")).toEqual([4, 4, 1, 4]);
});

test("it gets a list with the length of every word", () => {
  expect(fns.names(articles)).toEqual(["Debbie Downer", "Caspar Milquetoast"]);
});

test("it identifies if a given name is an author of any article", () => {
  expect(false).toEqual(fns.isAuthor("New Guy", articles));
  expect(true).toEqual(fns.isAuthor("Debbie Downer", articles));
});

test("it computes the average of the list", () => {
  expect(3).toEqual(fns.avg([1,2,3,4,5]));
});
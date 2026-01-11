// function add_two_fraction(a, b) {
//   let arr = [];

// }
// add_two_fraction([1, 2], [3, 2]);


let name = "mike";
let test = {
  name: "lisa",
  one: function () {
    console.log(this.name);
  },
  two: () => {
    console.log(name);
  },
};

test.one();
test.two();

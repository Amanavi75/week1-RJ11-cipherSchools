//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.


console.log(years["2"] !== years["02"]);


const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6


fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6


//methods in arrays 
const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
  };
  console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'

  const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0

function f() {
    console.log(Array.prototype.join.call(arguments, "+"));
  }
  
  f("a", "b"); // 'a+b'
  
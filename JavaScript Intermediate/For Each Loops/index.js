// For Each loop

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (element, index, array) {
  console.log("element", element);
  console.log("index", index);
  console.log("array", array);
});

// Using forEach to sum the element of an array

let sum = 0;
numbers.forEach(function (element) {
  sum += element;
});
console.log("sum", sum);

// modifying array elements using forEach

const squares = [];

numbers.forEach(function (num) {
  squares.push(num * num);
});
console.log(squares);

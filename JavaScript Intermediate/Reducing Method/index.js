//  Reducer()

//  using reduce to sum up all elemnets in an array

const numbers = [1, 2, 3, 4, 5, 6, 8];
const sumNum = numbers.reduce(function (acc, current) {
  // Perform logic

  //   console.log(acc);
  //   console.log(current);

  return acc + current;
}, 0);

console.log(sumNum);

// using reduce to find the maximum value in an array

const maxNum = numbers.reduce(function (acc, current) {
  if (current > acc) {
    return current;
  } else {
    return acc;
  }
}, 0);
console.log(maxNum);

//  using reduce to count the frequency of elements in an array

const fruitArray = [
  "apple",
  "orange",
  "mango",
  "kiwi",
  "banana",
  "apple",
  "orange",
];

const fruitredue = fruitArray.reduce(function (acc, current) {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(fruitredue);

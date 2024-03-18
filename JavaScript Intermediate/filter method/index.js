// Filtering

const Numbers = [1, 2, 3, 4, 5, 6];

const filterNumbers = Numbers.filter(function (num, index, array) {
  // filter logic
  return num % 2 === 0;
});
console.log(filterNumbers);

const gender = ["male", "female"];
const newArray = gender.filter(function (gender) {
  return gender === "male";
});
console.log(newArray);

//  using filter to remove falsy values from an array

const mixedArray = [0, 1, "apple", "", null, true];
const truthValue = mixedArray.filter(function (elemenet) {
  return Boolean(elemenet);
});
console.log(truthValue);

// Array from

// cloning array

const originalArray = [1, 2, 3];
const clonedArray = Array.from(originalArray);
console.log(clonedArray);

//  Creating an array from an Array-like object

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const convertedArrayObject = Array.from(arrayLike);
console.log(convertedArrayObject);

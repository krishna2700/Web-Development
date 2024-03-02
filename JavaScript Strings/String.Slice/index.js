// String slice
//  basic use
const basicUse = "Hello, World";
const extractedBasic = basicUse.slice(7, 12);
console.log(extractedBasic);

// omiiting the end index

const opmitEndIndex = "Hello, world";
const omitIndexEnd = opmitEndIndex.slice(7);
console.log(omitIndexEnd);

// using negative indexes

const NegativeIndex = "Hello, world";
const usingNegativeIndex = NegativeIndex.slice(-6);
console.log(usingNegativeIndex);

// Slicing between negative index

const sliceNegativeIndex = "Hello, world";
const sliceBetweenNegativeIndex = sliceNegativeIndex.slice(-6, -1);
console.log(sliceBetweenNegativeIndex);

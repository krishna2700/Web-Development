//  String Split

//  simple split by space

const simplePlit = "Hello, World, Wassup";
const resultSplits = simplePlit.split(", ");
console.log(resultSplits);

// Limit number of Split
const myText = "apple,banana,pear,orange";
const limitedFruits = myText.split(",", 2);
console.log(limitedFruits);

//  split by multiple characters

const multipleCharacters = "apple:banana-red;yellow";
const multipleResults = multipleCharacters.split(/[:;-]/);
console.log(multipleResults);

// splits into characters
const word = "Krishna";
const letters = word.split("");
console.log(letters);

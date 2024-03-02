// String includes

const StringIncludes = "I have an apple";
const checkString = StringIncludes.includes("apple");
const checkStringFalse = StringIncludes.includes("hello");
console.log(checkString);
console.log(checkStringFalse);

const checkPosition = "Krishna Ruparelia is Swaminarayan";
const PositionCheckIndex = checkPosition.includes("Ruparelia", 8);
console.log(PositionCheckIndex);

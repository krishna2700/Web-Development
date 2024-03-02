// String Conversion

// Convering a number to string

const num = 42;
const strNum = String(num);
console.log(typeof strNum + strNum);

//  how to convert boolean into a string
const boolean = true;
console.log(boolean);
const strBoolean = String(boolean);
console.log(typeof strBoolean);

// how to convert an Array to String
const array = [1, 2, 3];
console.log(typeof array);
const convertArray = String(array);
console.log(convertArray);
console.log(typeof convertArray);

//  Convert Object to a String

const object = { name: "Krishna", age: 23 };
console.log(object);
console.log(typeof object);
const converObject = String(object);
console.log(converObject);
console.log(typeof converObject);

// Convert NaN and null
const Null = String(null);
console.log(typeof Null);

// .toString() method Convertion

// convert number to String

const num1 = 25;
const strNum1 = num1.toString();
console.log(typeof strNum1);
console.log(typeof num1);

// convert boolean to string

const bolleanString = true;
const convertIt = bolleanString.toString();
console.log(typeof bolleanString);
console.log(typeof convertIt);

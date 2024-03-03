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

//  Converting from strings to Numbers

// converting pixel value from Number with parseInt()

const pixelValue = "42px";
console.log(typeof pixelValue);
const CovertNumber = parseInt(pixelValue);
console.log(typeof CovertNumber);
console.log(CovertNumber + 10);

//  Converting dimention String to Number with parseFloat()

const dimentionSt = "42.5px";
const dimentionConver = parseFloat(dimentionSt);
console.log(typeof dimentionConver);
console.log(dimentionConver + 7.5);

// Convert age Input to Number using number()

const ageInput = "42";
const ConvertAge = Number(ageInput);
console.log(typeof ConvertAge);
console.log(typeof ageInput);
console.log(ConvertAge * 9);
console.log(ageInput + 9);

//  Quick Convertion using unary + Operator

const StoreString = "100";
const convertedStore = +StoreString;
console.log(typeof convertedStore);
console.log(convertedStore + 100);

//  Converting from String to booleans

// Using Boolean() for form validation

const userInput = "Krishna";
const userInput1 = "";
const ConvertedBoolean = Boolean(userInput);
const ConvertedBoolean1 = Boolean(userInput1);
console.log(ConvertedBoolean);
console.log(ConvertedBoolean1);

// using Double Negation !! for Quick Convertion

const EmailInput = "Krishna@gmail.com";
const EmailInput1 = "";
const QuickNegation = !!EmailInput;
const QuickNegation1 = !!EmailInput1;
console.log(QuickNegation);
console.log(QuickNegation1);

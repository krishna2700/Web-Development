// ? ToString Method
// Converting a Number To staring

const age = 30;
console.log(typeof age);
const ageString = age.toString();
console.log(typeof ageString);
console.log(`Your age is ${ageString}`);

//  Displaying a Price

const price = 19.99;
const priceString = "The Price is $" + price.toString();
console.log(priceString);

// Using .toString() with different basis

const decimaNum = 10;
const binaryStr = decimaNum.toString(2);
console.log(binaryStr);

// ! working with BigINt

const bigIntNum = BigInt("9757158306");
console.log(bigIntNum.toString());

// ? toFixed() Method

// Formating Currency
const productrice = 49.955;
const convertRound = productrice.toFixed(2);
// const convertRound = productrice.toFixed();
// const convertRound = productrice.toFixed(1);
// const convertRound = productrice.toFixed(4);
console.log(convertRound);

// Scientific Data

const pie = 3.14159;
const conertPie = pie.toFixed(3);
console.log(conertPie);

//  Calculation body mass index
const weight = 70;
const height = 1.75;
const BMI = weight / height ** 2;
console.log(BMI.toFixed(2));
console.log(BMI);

// ? toExponential()

// Scientific data Representation

const avagardoNumber = 6.02218756e23;
console.log(avagardoNumber);
const ScientificNotation = avagardoNumber.toExponential();
console.log(ScientificNotation);

const number = 10;
const exponatedNum = number ** 2;
console.log(exponatedNum);

// ? parseint()

// converting user Input to Integer

const userInput = "42";
const convertNumbe = parseInt(userInput, 15);
console.log(convertNumbe);

// Extracting a Number from a text
const priceText = "Price 100 USD";
const ExtractedPrice = parseInt(
  priceText.replace("Price", "").replace("USD", ""),
  10
);
console.log(ExtractedPrice);

// Converting Binary data from a Sensor
const sensorData = "1101";
const sensorDataDecimal = parseInt(sensorData, 2);
console.log(sensorDataDecimal);

// ? parseFloat()

// converting price for an E-commerce Checkout

const chekoutPrice = "$99.99;";
const convertedValue = parseFloat(chekoutPrice);
console.log(convertedValue);
const convertCheckPrice = parseFloat(chekoutPrice.replace("$", ""));
console.log(convertCheckPrice);

// Extraction Temperature Data from a weather API

const apiTempData = "Temperature: 23.5°C";
const actualTemperatureData = parseFloat(
  apiTempData.replace("Temperature:", "").replace("°C", "")
);
console.log(actualTemperatureData);

// ? NaN

// calculating Grade Point Average(GPA)

const inputGPA = "3.8";
const parseGPA = parseFloat(inputGPA);
if (isNaN(parseGPA)) {
  console.log("Invalid GDP input");
} else {
  console.log(`YOur GDP is ${parseGPA}`);
}

//  Calculating Savings after a transaction

const initialSavings = "1000";
const widhDrawl = "Hello";
const NewSaving = parseFloat(initialSavings) - parseFloat(widhDrawl);
console.log(NewSaving);

if (isNaN(NewSaving)) {
  console.log("Invalid Transaction");
} else {
  console.log(`New Saving amount is ${NewSaving}`);
}

// Computing the Area of a Circle

const radiusInput = "7";
const radius = parseFloat(radiusInput);
const area = Math.PI * Math.pow(radius, 2);
if (isNaN(area)) {
  console.log("invalid Raius");
} else {
  console.log(`Area of the Circle is ${area}`);
}

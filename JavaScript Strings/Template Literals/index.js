//  Tempelate Literals

//  Basic usage

const greetings = `Heelo world`;
console.log(greetings);

const userName = "Krishna";
const welcomeMessage = `Hellow ${userName}`;
console.log(welcomeMessage);

//  MultiLine String

const poem = `
Roses are Red,
violets are blue,
sugar is Sweet,
so are you
`;
console.log(poem);

// Expression evaluation

const price = 10;
const tax = 0.05;
const total = `the price = ${price + (1 + tax)}`;
console.log(total);

//  Escaping backticks

const stringWithBackticks = `He's a backtick \` `;
console.log(stringWithBackticks);

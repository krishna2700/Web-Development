//  To upper and lower case

//  To Upper case

const toLowerCaseString = "Hello , world";
const result = toLowerCaseString.toUpperCase();
console.log(result);

//  to lower case

const toUppercase = "HELLO, WORLD";
const check = toUppercase.toLocaleLowerCase();
console.log(check);

//  mixing Method

const mixStr = "HeLLo, WoRld";

// const mixresult = mixStr.toLowerCase();
const mixresult = mixStr.toUpperCase();
console.log(mixresult);

//  case=insensitive comparision

const string1 = "javascript";
const string2 = "Javascript";

if (string1.toLowerCase() === string2.toLowerCase()) {
  console.log("Strings are equal,ignoring the case");
}

//  note on the non-english characters
const accentedStr = "हैलो वर्ल्ड";
console.log(accentedStr.toUpperCase());
console.log(accentedStr.toLowerCase());

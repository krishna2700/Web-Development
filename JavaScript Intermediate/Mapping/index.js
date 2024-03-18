// Mapping

const Numbers = [1, 2, 3, 4, 5, 6];

const MapNumbers = Numbers.map(function (num, idx, arr) {
  return num * 10;
});
console.log(MapNumbers);
console.log(Numbers);

// using map to convert an Array of string to upperCase

const words = ["apple", "orange", "pear", "kiwi"];

const mapWords = words.map(function (word) {
  return word.toUpperCase();
});
console.log(mapWords);

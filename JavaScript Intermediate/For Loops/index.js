//  For Loops

//  Basic for loops to print numbers 1-5

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// Looping through an Array to Print its elemnets
const fruits = ["Apple", "orange", "Banana", "kriwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// using'break' to exit loop early

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//  using 'continue' to skip an iteration
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Looping in reverse

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

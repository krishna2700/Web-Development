// if Statement
//  Case Study 1
//  Consider an E-commerce System where a user wants to purchase an item. The System has to check if the item is in stock before proceeding with the Purchase

let inStock = true;
// let inStock = false;

if (inStock) {
  console.log("Item is in Stock");
}

//  Case Study 2
//  Suppose you're creating a website where users must be at least 18 years old to register. Here's how you might use an if Statement to check a user's age:

let userAge = 19;
let userAge1 = 17;

if (userAge >= 18) {
  console.log("you are Eligible");
}

// Else Statement
// Case 3 Suppose you're developing a website and you want to personalize a message for users based on weather they're logged in or not

let isLoggedin = true;

if (isLoggedin) {
  console.log("Welcome Back");
} else {
  console.log("Welcome guest, Please Log in");
}

//  Case 4
// Imagine you're designing an online voiting system. In this System, users can only vote if they're registered. Here's how you might use if-else statement to Check a user's status

let isRegistered = false;

if (isRegistered) {
  console.log("You are eligible to vote");
} else {
  console.log("you are not eligible");
}

// else if Statement
// case 5
// Let's consider a traffic light system where you want to tell a driver what to do based on the color of the traffic Light. Here's how you might use an else if Statement for this Purpose.

let trafficLight = "yellow";

if (trafficLight === "red") {
  console.log("Stop");
} else if (trafficLight === "yellow") {
  console.log("prepare to stop");
} else if (trafficLight === "green") {
  console.log("Go");
} else {
  console.log("Invalid Traffic Light");
}

//  Escaping Characters in Strings

//  using backslashes before escaping

const quate = 'He Said,"Hello World"';
console.log(quate);

//  New Line and tabs

const multiLine = "Line 1\nLine 2\tTabbed";
console.log(multiLine);

// Escaping backlashes

const backlashes = "c:\\program files\\App";
console.log(backlashes);

//  using templeate literals

const anotherQuate = `He said, "That's Awesome"`;
console.log(anotherQuate);

//  Unicode Characters

const uniCode = "I \u2764 javaScript";
console.log(uniCode);

// Escape Sequence for a dollor sign and curly braces in templeate literals

const metaString = `The syntax for variable is \${variableName}`;
console.log(metaString);

// use String .replace()

const replaceString = "This is an old Text";
const replacedString = replaceString.replace("old", "new");
console.log(replacedString);

// Replace all occurances
const replaceAll = "old text with old words";
const repetiveReplace = replaceAll.replace(/old/g, "new");
console.log(repetiveReplace);

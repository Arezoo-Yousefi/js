let text = "HELLO";
let result;
let firstChar = text.charAt(0);
let secondChar = text.charAt(1);
let thirdChar = text.charAt(2);
let forthChar = text.charAt(3);
let fifthChar = text.charAt(text.length-1);
result = fifthChar.concat(forthChar).concat(thirdChar).concat(secondChar).concat(firstChar);
console.log("the final result is: ".concat(result.toLowerCase()));
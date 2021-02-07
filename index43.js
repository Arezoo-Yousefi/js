let text = "game of thrones";
let firstChar = text.charAt(0);
console.log(firstChar);
let secondChar = text.charAt(5);
console.log(secondChar);
let thirdChar = text.charAt(8);
console.log(thirdChar);
let result = firstChar.concat(secondChar).concat(thirdChar)
console.log("The final result is: ",result.toUpperCase());
let limited = text.charAt(100);
console.log(limited);
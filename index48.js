let message = "3.14 it's a great number but 42 it's the answer to life.";
const pi = parseFloat(message.slice(0,4));
let answerToLife = parseInt(message.slice(29,31));
const result = pi + answerToLife;
console.log("pi=".concat(pi),"\nanswer to life= " .concat(answerToLife));
console.log(`The sum: ${result.toString()}`); 
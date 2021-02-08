let playerName = "Patrik Laine is lame";
let team1 = "New Jersey Devils";
let taem2 = "New York Rangers";
let team3 = "Winnipeg jets";
let team4 = "Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";
let S1 = playerName.slice(0,15);
let S2 = team3.slice(9);
let S3 = message.slice(12,20);
let S4 = message.slice(35,38);
let template =`${S1} ${S3} ${S2} player, ${S4} ${S2}!!`;
console.log(template);
template = `${S1} ${S3} ${S2.toUpperCase()} player, ${S4} ${S2}!!`
console.log(template);
let PATRIK = (S1.slice(0,12)).toUpperCase();
let is = S1.slice(13);
let j = (S2.slice(0,1)).toUpperCase();
let jet = S2.slice(1);

template = `${PATRIK} ${is} ${S3} ${j}${jet} player, ${S4} ${j}${jet}!!`;
console.log(template);
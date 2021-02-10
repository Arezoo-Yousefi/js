let f1 = 0;
let f2 = 1;
let sum = 0;
let i = 0;
while (i <= 10){
console.log(sum);
f1 = f2;
f2 = sum;
sum = f1 + f2;
i++;
}
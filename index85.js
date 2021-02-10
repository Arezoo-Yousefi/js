let f1 = 0;
let f2 = 1;
let sum = 0;
let i = 0;
do{
console.log(sum);
f1 = f2;
f2 = sum;
sum = f1 + f2;
i++;
}while(i < 10);
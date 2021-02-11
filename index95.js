let sum = 0;
let f1 = 0;
let f2 = 1;
for (let i = 1; i <= 10; i++){
    console.log(sum);
    f1 = f2;
    f2 = sum;
    sum = f1 + f2;
}
let numbers = [];
for(let i = 1; i <= 1000; i++){
    numbers.push(i);
}
let incrementedArray = numbers.map((number) => {
   return(number + 10);
});

    for(let i = 1; i<= 1000 ; i++)
    console.log(`index: ${i}, original number:${numbers[i - 1]}, incremented value: ${incrementedArray[i - 1]}`);
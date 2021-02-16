let numbers = [];
for(let i = 1; i <= 1000; i++){
    numbers.push(i);
}
let sum = 0;
for(let count = 0; count < numbers.length; count++){
    sum += numbers[count];
    console.log(sum);
}
if(sum == 500500){
    console.log("good job!!!")
}else{
    console.log("Take a look to see if something is wrong")
}
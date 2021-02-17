let numbers = [];
for (i = 1; i <= 1000; i++){
    numbers.push(i);
}
let evenArray = numbers.filter((number) =>{
    if(number%2 == 0){
        return number;
    }
})
let oddArray =  numbers.filter((number) => {
    if(number % 2){
        return number;
    }
});
for(i = 1; i <= 10; i++){
    console.log(oddArray.pop());
}
for(i = 1; i <= 20; i++){
    console.log(evenArray.shift());
}
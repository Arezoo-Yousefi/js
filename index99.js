let sum = 0;
let j = 0;
for(let i = 0; i <= 1000; i += 2){
    if (j >= 20){
        break;
    }else {
        j++;
    }    
    sum += i;
}
console.log(sum);
let result = 0;
for (i = 0; i <= 1000; i++){
if((result + i) >= 400){
        break;
    }else{
        result += i;
    }
}
console.log(result);

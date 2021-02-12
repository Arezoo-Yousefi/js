function numberType(n){
    if(n % 2 == 0){
        return true;
    }else return false;
}
function even(n){
    if(numberType(n)){
        console.log(`${n} is even`);
    }else{
        console.log(`${n} is odd`);
    }
}
even(2);
even(5);
even(3);
even(24);
even(12);
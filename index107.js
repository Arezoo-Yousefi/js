function biggerNumber(firstNumber, secondNumber){
    if ((typeof firstNumber == "number") && (typeof secondNumber == "number")){
        if (firstNumber > secondNumber){
        console.log(firstNumber + " is bigger than "+ secondNumber);
        }else if(secondNumber > firstNumber){
        console.log(secondNumber +" is bigger than " + firstNumber);
        }else{
        console.log( firstNumber + " is equal to "+ secondNumber);
        }
    }    
}
biggerNumber(6, 3);
biggerNumber(2, 2);
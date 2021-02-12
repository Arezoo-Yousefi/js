function sort(number1, number2, number3, highToLow){
    let high;
    let mid;
    let low;
    if(number1 >= number2 && number2 >= number3){
        high = number1;
        if(number2 >= number3){
            mid = number2;
            low = number3;
        }else{
            mid = number3;
            low = number2;
        }

    }else if(number2 >= number1 && number2>= number3){
        high = number2;
        if(number1 >= number3){
            mid = number1;
            low = number3;
        }else{
            mid = number3;
            low = number1;
        }
    }else {if(number3 >= number2 && number3 >=number1){
            high = number3;
            if (number1 >= number2){
                mid = number1;
                low = number2;
            }else{
                mid = number2;
                low = number1;
            }
        }
    }
    if(highToLow){
        console.log(high , mid , low);
    }else{
        console.log(low , mid , high);
    }     
        
}
sort(10, 8, 25, true);
sort(8, 10, 25, false);
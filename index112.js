function showNumber(start, end){
    if(typeof start === "number" && typeof end === "number"){
        if(start > end){
            let n = start;
            for(let i = end; i <= start; i++){
                console.log(n--);
            }
        }else if(start < end){
            for(let i = start; i <= end; i++){
                console.log(start++)
            }
        }else {
            console.log(start);
        }
    }else{console.log("enter valid number")}
}    

showNumber(1000, 0);
showNumber(100, 100);
showNumber("100", 300);
showNumber(0, 1000);
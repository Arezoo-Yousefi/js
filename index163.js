function add(){
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
         
        sum += arguments[i];
    }
    console.log(sum);
}
add(5, 7, 3, 2, 9);
add(3, 9, 12, 4, 6, 8, 2, 11, 32,37);
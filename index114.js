function revert(text){
    let long = text.length - 1;
    let letter;
    let sum = "";
    for(let i = 1; i <= text.length; i++){
        letter = (text.charAt(long));
        (long)--;
        sum += letter;
        }
    console.log(sum)    
}
revert("Arezoo");
revert("hello")
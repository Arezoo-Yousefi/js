function getUserID(){
    return 50;
}
function isUserValid(){
    const i = getUserID();
    if (i >= 30){
        return true;
    }
}
if (isUserValid()){
    console.log("User valid");
}else{
    console.log("User not valid");
}
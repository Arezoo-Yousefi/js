const validateUser = function(username, password){
    if ((username == "nacho" && password == "Nerd1979")||(username == "pedro" && password == "Batman0217") || (username == "marta" && password =="Mother2312")){
        console.log(`welcome ${username}, nice to see you again`);
    }else{
        console.log("Please input valid credentials");
    }
}
validateUser("nacho", "Nerd1979");
validateUser("pedro", "Batman0217");
validateUser("marta", "Mother2312");
validateUser("marta", "Nerd1979");
let user = {
    username: "batman",
    password: "Alfred1960ROCKS!"
}
 user.password = user.password.replace("ROCKS", "KPO");
if(user.username === "batman" && user.password === "Alfred1960KPO!"){
    console.log("Welcome back batman!!");
}else{
    console.log("Sorry, you can't enter the Batcave, try again..");
}
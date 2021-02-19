let user = {
    username: "batman",
    password: "Alfred1960ROCKS!"
};
console.log(`Username: ${user.username}\nPassword: ${user.password}` );
user0 = user.username.charAt(0).toUpperCase();
user.username = user.username.replace(user.username.charAt(0), user0);
user.password = (user.password).replace("1960", " ");
console.log(user);
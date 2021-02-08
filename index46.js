let userAndPassword = "pepito2017,12345";
let username = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11,userAndPassword.length);
let template = `The user ${username} has ${password} as password`;
console.log(template);
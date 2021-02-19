let user = {
    username: null,
    password: null,
    greet: function (){
        if(this.username != null){
        console.log(`Hello, I'm user ${this.username}`);
        }else{
        console.log("Please assign a username value")
        }
    },
    updateUsername: function(username){
        this.username =  username;
    },
    updatePassword: function(password){
        this.password = password;
    },
}    
user.greet();
user.updateUsername("Ali");
user.updatePassword("Arezoo");
user.greet();


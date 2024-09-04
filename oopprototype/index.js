function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
} 

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}
var userOne = new User('kakakak!@gnauk,cin', 'rara');
var userTwo = new User('dakjndfkdjnf!@mflf.com', 'kakaka');

console.log(userOne);
userTwo.login();
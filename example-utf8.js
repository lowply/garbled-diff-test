class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
		// example-utf8.js
        console.log("みなさんはじめまして。私の名前は " + this.login + " です。");
    }
}

const me = new User("lowply");
me.greet();

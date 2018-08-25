class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-euc.js
        console.log("みなさんはじめまして。私の名前は " + this.login + " です。");
    }
}

const me = new User("lowply");
me.greet();

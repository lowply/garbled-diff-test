class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-euc.js
        console.log("みなさんこんにちは。私のハンドルネームは " + this.login + " です。");
    }
}

const me = new User("lowply");
me.greet();

// vim: syntax=JavaScript

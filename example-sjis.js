class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("みなさんこんにちは。私のハンドルネームは " + this.login + " です。よろしくお願いします。");
    }
}

const me = new User("lowply");
me.greet();

// vim: syntax=JavaScript

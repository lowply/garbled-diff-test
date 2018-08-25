class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
		// example-utf8.js
        console.log("みなさんこんにちは。私のハンドルネームは " + this.login + " です。");
    }
}

const me = new User("lowply");
me.greet();

// vim: syntax=JavaScript

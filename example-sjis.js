class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("�݂Ȃ���͂��߂܂��āB���̖��O�� " + this.login + " �ł��B");
    }
}

const me = new User("lowply");
me.greet();

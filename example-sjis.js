class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("�݂Ȃ��񂱂�ɂ��́B���̃n���h���l�[���� " + this.login + " �ł��B��낵�����肢���܂��B");
    }
}

const me = new User("lowply");
me.greet();

// vim: syntax=JavaScript

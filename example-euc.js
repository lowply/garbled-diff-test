class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-euc.js
        console.log("�ߤʤ��󤳤�ˤ��ϡ���Υϥ�ɥ�͡���� " + this.login + " �Ǥ�����������ꤤ���ޤ���");
    }
}

const me = new User("lowply");
me.greet();

// vim: syntax=JavaScript

class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-euc.js
        console.log("�ߤʤ���Ϥ���ޤ��ơ����̾���� " + this.login + " �Ǥ���");
    }
}

const me = new User("lowply");
me.greet();

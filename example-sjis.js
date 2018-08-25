class User {
    constructor (login) {
        this.login = login;
    }
    greet (){
        // example-sjis.js
        console.log("Ç›Ç»Ç≥ÇÒÇ±ÇÒÇ…ÇøÇÕÅBéÑÇÃñºëOÇÕ " + this.login + " Ç≈Ç∑ÅB");
    }
}

const me = new User("lowply");
me.greet();

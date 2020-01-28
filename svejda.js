const fs = require("fs");

let loginZHtml = "bbb"; //prihlasovaci jmeno zadane uzivatelem na HTML strance
let passwordZHtml = "cccccc";  //heslo zadane uzivatelem na HTML strance
let resObj = {}; //odpoved do HTML stranky

let s = fs.readFileSync("userstest.json").toString();
console.log(s);
let users = JSON.parse(s);
resObj.error = "Chybne prihlasovaci jmeno nebo heslo";
let loggedUser = null;
for (let user of users) {
    if (user.login == loginZHtml) {
        console.log("Mam ho! Je to "+user.login);
        if (user.password == passwordZHtml) {
            console.log("...a ma spravny heslo.");
            resObj.error = null;
            resObj.userLogin = user.login;
            loggedUser = user;
        } else {
            console.log("...ale ma blby heslo! :-(");
        }
    } else {
        console.log("Tenhle to neni: "+user.login);
    }
}
if (loggedUser) { //to je to same jako if (loggedUser != null)
    console.log("Uzivatel prihlasen.");
} else {
    console.log("Chybne prihlaseni.");
}
console.log("chyba:"+resObj.error);
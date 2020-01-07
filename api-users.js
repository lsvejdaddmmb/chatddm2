const dateFormat = require('dateformat');
const fs = require('fs');
const crypto = require('crypto');

const FILE_USERS = "users.json";

function zamixujHeslo(heslo) {
    //let mix = heslo.split("").reverse().join("");
    let mix = crypto.createHash("sha256").update(heslo).digest("hex");
    mix = mix.split("").reverse().join("");
    return mix;
}

let list = new Array();
if (fs.existsSync(FILE_USERS)) {
    list = JSON.parse(fs.readFileSync(FILE_USERS));
}
console.log(list);

exports.apiUsers = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.list = list;
    } else if (req.pathname.endsWith("/reg")) {
        let addObj = {};
        let dt = new Date();
        addObj.time = dateFormat(dt, "HH.MM.ss");
        addObj.login = req.parameters.login;
        addObj.password = zamixujHeslo(req.parameters.password);
        list.push(addObj);
        fs.writeFileSync(FILE_USERS, JSON.stringify(list));
    }
}
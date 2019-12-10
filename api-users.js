const dateFormat = require('dateformat');

let list = new Array();

exports.apiUsers = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.list = list;
    } else if (req.pathname.endsWith("/reg")) {
        let addObj = {};
        let dt = new Date();
        addObj.time = dateFormat(dt, "HH.MM.ss");
        addObj.login = req.parameters.login;
        addObj.password = req.parameters.password;
        list.push(addObj);
    }
}
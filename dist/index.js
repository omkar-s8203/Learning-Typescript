"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
;
function getUpper(val) {
    return val.toUpperCase();
}
function sugnUpUser(name, email, passwword, isPaid) {
}
var loginUser = (name, email, isPaid = false) => {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
loginUser("h", "h@h.com");
sugnUpUser("omkar", "omkar@123.com", "omkar123", true);
console.log(getUpper("omkar suryaanshiu"));
console.log(addTwo(5));
const getHello = (s) => {
    return "";
};
const heros = ["thoe", "spiderman", "ironMan"];
console.log(heros.map(hero => {
    return `hero is ${hero}`;
}));
console.log(heros.map((hero) => {
    return `hero is my ${hero}`;
}));
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("this is an better way to write an code");
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=index.js.map
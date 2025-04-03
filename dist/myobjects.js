"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "omkar",
    email: "omkar@gmail.com",
    isActive: true
};
function createUser({ name, isPaid }) {
    console.log(name, isPaid);
}
let newUser = { name: "omkar", isPaid: false, email: "omkar@gmail.com" };
createUser({ name: newUser.name, isPaid: newUser.isPaid });
function createCourse() {
    return { name: "typescript", price: 935 };
}
let myUser = {
    _id: "1234",
    name: "h",
    email: "h@gmail.com",
    isActive: false
};
myUser.email = "Omkar@gmail.comn";
//# sourceMappingURL=myobjects.js.map
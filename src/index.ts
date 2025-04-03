// console.log("hello world");
// var age: number = 20;
// if(age< 50)
//     age += 10;
//  console.log(age);
// --------------Section 2 ----------------

// let sales = 123_456_789;
// let course = 'typescript';
// let is_published = true;

// let level;  // this is an any type variable
// level = 1;
// level = 2;


// function render(documnet: any){
//     console.log(documnet);
// }

// ---------------Function----------------------

function addTwo(num: number): number{
    return num + 2;    //only number can be return
    // return "hello"
};

function getUpper(val: string){
    return val.toUpperCase()
}

function sugnUpUser(name: string , email: string, passwword: string, isPaid: boolean){
}

var loginUser = (name: string , email: string, isPaid: boolean = false) =>{
    if (isPaid === void 0) {isPaid = false;}
};

loginUser("h", "h@h.com");

sugnUpUser("omkar", "omkar@123.com" , "omkar123" , true);

console.log(getUpper("omkar suryaanshiu"));
console.log(addTwo(5));


// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 ok"
// }


const getHello = (s: string):string =>{
    return ""
}

const heros = ["thoe", "spiderman" , "ironMan"];

console.log( heros.map(hero => {
    return `hero is ${hero}`
}))

console.log(heros.map((hero): string => {
    return `hero is my ${hero}`
}))


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

consoleError("this is an better way to write an code")


function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

// handleError("this is an best way to handle the error in typescript");

// -------------Myobject-------------------
const user = {
    name: "omkar",
    email: "omkar@gmail.com",
    isActive: true
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(name, isPaid);
}

let newUser = { name: "omkar", isPaid: false, email: "omkar@gmail.com" };
createUser({ name: newUser.name, isPaid: newUser.isPaid }); // ✅ Fix: Removed extra property

function createCourse(): { name: string; price: number } {
    return { name: "typescript", price: 935 };
}
export{}
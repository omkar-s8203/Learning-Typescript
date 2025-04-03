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

function addTwo(num: number){
    // return num + 2;
    return "hello this is omkar suryawasnshi"
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

export{}
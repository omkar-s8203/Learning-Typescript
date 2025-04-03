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

type User ={
   readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
_id: "1234",
name: "h",
email: "h@gmail.com",
isActive: false
}


type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    carddate: string;
}

type cardDEtails = cardNumber & cardDate & {
    cvv: number;
}


myUser.email = "Omkar@gmail.comn";
// myUser._id = "kjshf"        Cannot assign to '_id' because it is a read-only property.ts(2540)



export {};
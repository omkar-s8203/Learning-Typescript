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

export {};


export{}
const person = {
    name: "Anwesha",
    age: 24,
    friends: ["Anudip", "Shwrna"],
    details: {
        student: "Yes",
        isMarried: false,
        status: "not found",
        father: {
            name:"nipedfsd"
        }
    }
};

console.log(person.details.father.name);
console.log(person.details?.mother?.name);
console.log(person["details"]["student"]);
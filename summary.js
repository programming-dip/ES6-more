const person = {
    name: "Anudip",
    age: 21,

    father: {
        name: "eXAMPLE ",
        age: 0
    },

}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(person.name);
console.log(person["name"]);
console.log(person.mother?.name);

const numbers = [1,2,3,4,5,6];

const newNumbers = numbers.map(num => num*num);
console.log(newNumbers);

const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "mi", color: "blue", price: 400, brand: "xiaomi" },
    { id: 3, name: "s23", color: "gold", price: 1500, brand: "samsung" },
    { id: 4, name: "desire", color: "black", price: 200, brand: "htc" },
    { id: 5, name: "realme", color: "red", price: 500, brand: "realme" },
];

products.forEach(p => {
    if(p.name=="iphone") {
        console.log(p);
    }
});

const singleProduct = products.find(p => p.id === 3);
console.log(singleProduct);


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class hena extends Person {
    constructor(name, age, status){
        super(name, age);
        this.status = status;
    }
}


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

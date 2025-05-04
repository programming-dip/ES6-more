const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "mi", color: "blue", price: 400, brand: "xiaomi" },
    { id: 3, name: "s23", color: "gold", price: 1500, brand: "samsung" },
    { id: 4, name: "desire", color: "black", price: 200, brand: "htc" },
    { id: 5, name: "realme", color: "red", price: 500, brand: "realme" },
];

const newProducts = products.map(p => {
    if (p.brand === "apple") {
        p.price += 100;
    }
    return p;
});

console.log(newProducts);

products.forEach(p => {
    if (p.brand === "apple") {
        console.log(p);
    }
});


const singleProduct = products.find(p => p.id===3);
console.log(singleProduct);

const newProducts2 = products.filter(p => p.name === "iphone");
console.log(newProducts2);



const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "mi", color: "blue", price: 400, brand: "xiaomi" },
    { id: 3, name: "s23", color: "gold", price: 1500, brand: "samsung" },
    { id: 4, name: "desire", color: "black", price: 200, brand: "htc" },
    { id: 5, name: "realme", color: "red", price: 500, brand: "realme" },
];

products.forEach(product =>{
    if(product.color === "black") {
        console.log(product);
    }
})

const filteredProducts = products.filter((product) => product.price >= 1000);
console.log(filteredProducts);




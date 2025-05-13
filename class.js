class product {
   constructor(name,price,brand,owner) {
    this.name = name;
    this.price = price;
    this.brandName = brand;
    this.owner = owner;
   }
   details() {
    console.log(`details from ${this.name}`);
   }

   
} 

const iphone = new product("iphone", 1234, "apple", "Anudip");
console.log(iphone);
iphone.details();
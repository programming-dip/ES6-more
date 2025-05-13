class Vehicle{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}

class Bus extends Vehicle {
    constructor(name,price,seat) {
        super (name, price);
        this.seat = seat;
    }

    route () {
        console.log("Sydney to Melbourne");
    }
}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name,price);
        this.load = load;
    }

}

const greenLine = new Bus("Green Line",80000,50);
console.log(greenLine);
greenLine.move();
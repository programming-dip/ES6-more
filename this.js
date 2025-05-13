class person{
    #status;
    constructor (name, age, status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    sleep() {
        console.log(`${this.name} sleeps at 10 PM`)
    }
    
    action() {
        console.log(this.#status);
    }
    
}

const solimUddi = new  person("Solim", 65,"single");
console.log(solimUddi);
solimUddi.sleep();
solimUddi.action();
console.log(solimUddi.#status);
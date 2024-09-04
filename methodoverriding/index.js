class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log('Starting enginee.. for Car');
    }
}

class Audi extends Car {
    //overriden method
    startEnginer() {
        console.log('Starting enginee.. for Audi');
    }
    autoParking() {
        console.log("audi autoparking");
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
const car = new Car();
car.startEngine();
car.autoParking();
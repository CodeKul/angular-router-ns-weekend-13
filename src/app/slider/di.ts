class Car {

    //private eng: Engine = new Engine();

    constructor(
        private eng: Engine
    ) {

    }
}

class Engine {

}

class BmwEngine extends Engine {

}

let eng = new Engine();
let engBmw = new BmwEngine();

let car = new Car(engBmw);

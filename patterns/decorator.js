class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
    this.acceleration = 1;
  }

  drive() {
    this.driving = setInterval(() => {
      this.speed += this.acceleration;
      console.log(this.speed)
    }, 1000);
  }

  stop() {
    const int = setInterval(() => {
      clearInterval(this.driving);
      if (!this.speed) {
        clearInterval(int);
        return;
      }

      this.speed -= 1;
      console.log(this.speed)
    }, 1000);
  }
}

//function decorator
//adds additional method which does not exist for class Car 
const setSuperAcceleration = car => {
  car.superAcceleration = function () {
    clearInterval(this.driving)
    let count = 0;

    const int = setInterval(() => {
      if (count < 8) {
        this.speed += 10;
        console.log(this.speed);
        count++;

        return;
      }

      clearInterval(int);
      this.drive()
    }, 1000);
  }
}

const car = new Car('bla');

setSuperAcceleration(car);

car.drive()

setTimeout(() => {
  car.superAcceleration()
}, 1000);

setTimeout(() => {
  car.stop()
}, 9000);
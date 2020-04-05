class Vehicle {
  constructor (color, engine, maxSpeed) {  
    this.color = color;
    this.engine = engine;
    this.maxSpeed = maxSpeed;

    this._speed = 0;
    this._reachedSpeed = 0;
    this._stopping = false;
    this._moving = false;
  }

  upgradeEngine(engine, maxSpeed) {
    if (!this._speed) {
      this.engine = engine;
      this.maxSpeed = maxSpeed;
    }
  }

  drive() {
    if (this._speed) {
      console.log('You can not start driving. You are running now already!');

      return;
    } else {
      console.warn('Please fasten your belts!');
    }

    if (this._stopping) {
      clearInterval(this._stopping);
    }

    this._moving = setInterval(() => {
      this._speed += 20;
      this._reachedSpeed = Math.max(this._reachedSpeed, this._speed);

      if (this._speed > this.maxSpeed) {
        console.log('speed is too high, Please STOP!');
      }

    }, 3000);
  }

  stop(message = 'Good drive') {
    if (!this._speed) {
      console.log('You are not running');

      return
    }

    if (this._stopping) {
      console.log('You are stopping already');

      return
    }


    this._stopping = setInterval(() => {
      clearInterval(this._moving);

      this._speed = this._speed < 20 ? 0 : this._speed - 20;

      if (this._speed === 0) {
        console.log(`${message}, Max speed during the drive was ${this._reachedSpeed}`);
        clearInterval(this._stopping)
        this._stopping = false;
        this._reachedSpeed = 0;
      }

    }, 3000);

  }
}

class Car extends Vehicle {
  constructor (color, engine, maxSpeed, model) {
    super(color, engine, maxSpeed);
    this.model = model;
  }

  stop() {
    super.stop(`Car ${this.model} is stoped.`)
  }
}

class Motorcycle extends Vehicle {
  constructor (color, engine, maxSpeed, model) {
    super(color, engine, maxSpeed);
    this.model = model;
  }

  drive() {
    if (this._speed) {
      console.log('You can not start driving. You are running now already!');

      return;
    } else {
      console.warn('Please fasten your belts!');
    }

    if (this._stopping) {
      clearInterval(this._stopping);
    }

    this._moving = setInterval(() => {
      if (this._speed > this.maxSpeed) {
        console.log('Something went wrong and motorcycle begin braking.');
        this.stop();
        clearInterval(this._moving)
  
        return;
      }  

      this._speed += 20;
      this._reachedSpeed = Math.max(this._reachedSpeed, this._speed);

    }, 3000);
  }

  stop() {
    super.stop('Incredible drive')
  }

}
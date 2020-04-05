// Create Class Vehicle with following parameters
// color, engine, maxSpeed,

// and methods:

// 1) upgradeEngine(engine, maxSpeed)
// 	engine - could be any name you want
// 	maxSpeed - max speed for this engine

// 	Notice: you can upgrade engine only if car is stoped;

// 2) drive()
// 	The vehicle starts to drive every 3 seconds speed increase at 20.
// 	If speed is greater than maxSpeed the warning message should be shown
// 	// 'speed is too high, Please STOP!'
	
	
// 	Notice: if car already drive you can't call this method again

// 3) stop()
// 	The vehicle dicrease it's speed every 1 seconds at 20.
// 	When vehicle is stoped, the following messae should be shown
// 	// Good drive, Max speed during the drive was ***

// 	*** - max speed from moment the car begin drive until stop ("stop" - means speed was 0)
// 	Notice: if car begin braking you can't call this method again, but you can drive again


// create Class Car with the same parameters and methods as above
// Car will have aditional parameter "model"
// 	If car was stoped the following message should be shown
// 	// Car "model" is stoped. Max speed was *"max speed durin drive"

// 	When car begin drive, the warning message should be shown
// 	// Please fasten your belts!


// create Class Motorcycle
// Motorcycle will have aditional parameter "model"
// 	If motorcycle was stoped the following message should be shown:
// 	// Incredible drive, you reached *"max speed durin drive"

// 	If motorcycle reached max speed the following should shown
// 	// Something went wrong
// 	and motorcycle begin braking.

// Car and Motorcycle have the method 

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
class Fly {
  move() {
    this.position += 10;
  }
}

class Walk {
  move() {
    this.position += 1;
  }
}

class Viking {
  constructor(position = 0) {
    this.position = position;
    this.moveBehavior = new Walk();
  }

  move() {
    return this.moveBehavior.move.call(this);
  }
}

const viking = new Viking()
viking.move();
console.log(this.position);
viking.moveBehavior = new Fly()
viking.move();
console.log(this.position)
const { CommandLogger } = require('./singleton');

const factorial = num => !num ? 1 : num * factorial(num - 1);

const combinations = (n, k) => factorial(n) / (factorial(n - k) * factorial(k));

const logger = new CommandLogger();

class BinomialDistribution {
  constructor (amountOfExperiments, probabilityOfSuccess) {
    this.amount = amountOfExperiments;
    this.probability = probabilityOfSuccess;
    logger.addToCommandList(`created instance of ${this.constructor.name}`)
  }

  getExpectedValue() {
    return this.amount * this.probability;
  };

  getDispersion() {
    return this.getExpectedValue() * (1 - this.probability);
  }

  calculateProbability(amountOfSuccess) {
    return combinations(this.amount, amountOfSuccess) * this.probability ** amountOfSuccess * (1 - this.probability) ** (this.amount - amountOfSuccess);
  }
}

class PoissonDistribution extends BinomialDistribution {
  constructor(amountOfExperiments, probabilityOfSuccess) {
    super(amountOfExperiments, probabilityOfSuccess);
  }

  calculateProbability(amountOfSuccess) {
    return Math.exp( - this.getExpectedValue()) / factorial(amountOfSuccess) * this.getExpectedValue() ** amountOfSuccess;
  }
}


class LaplassDistribution extends BinomialDistribution {
  constructor(amountOfExperiments, probabilityOfSuccess) {
    super(amountOfExperiments, probabilityOfSuccess);
  }

  calculateProbability(amountOfSuccess) {
    const x = (amountOfSuccess - this.getExpectedValue()) / Math.sqrt(this.getDispersion());
    const phi = Math.exp(- (x ** 2) / 2) / Math.sqrt(2 * Math.PI);

    return phi / Math.sqrt(this.getDispersion())
  }
}


// this is an Abstract Factory design pattern realization
const abstractFactoryOfDistributions = (amountOfExperiments, probabilityOfSuccess) => {
  if (amountOfExperiments < 50) {
    return new BinomialDistribution(amountOfExperiments, probabilityOfSuccess);
  } else if (amountOfExperiments * probabilityOfSuccess < 10) {
    return new PoissonDistribution(amountOfExperiments, probabilityOfSuccess);
  }

  return new LaplassDistribution(amountOfExperiments, probabilityOfSuccess);
};


// there is a realization of strategy design pattern
const calculateProbability = (amountOfExpreriments, amountOfSuccesfullExpreriments, probability) => {
  const distributions = abstractFactoryOfDistributions(amountOfExpreriments, probability);
  logger.addToCommandList(`get command to calculate probability ${amountOfSuccesfullExpreriments} succesfull experiments from ${amountOfExpreriments}`);
  return distributions.calculateProbability(amountOfSuccesfullExpreriments);
}

console.log(calculateProbability(3, 0, 0.5))
console.log(calculateProbability(100, 20, 0.2))
console.log(calculateProbability(1000, 2, 0.002))
console.log(logger.commands)
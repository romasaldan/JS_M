// Promise speed competition

class UrlRacer {
  constructor (url) {
    this.name = url;
    this.logs = [];
    this.promice = fetch(url)
      .then(() => ({
        time: Date.now(),
        name: this.name 
      }))
      .catch(() => ({
        name: this.name 
      }))
    }
}

//arena is mediator
class Arena {
  constructor () {
    this.racers = [];
  }

  registerRacer(racer) {
    this.racers.push(racer);
    return this;
  }

  unRegisterRacer(racer) {
    this.racers = this.racers.filter(el => el === racer);
    return this;
  }

  logResults(promise, place, result, racingName) {
    promise.logs.push({
      racingName,
      result: result.time ? `The promise has finished on ${place} place` : 'The promise has not finished',
    });

  }

  readOffResults(winner, nameOfRacing) {
    if (!winner.time) {
      console.log('all promises were not finished');

      return;
    }

    console.log(`winner of ${nameOfRacing} is ${winner.name}`);
  }

  startRacing(nameOfRacing) {
    if (this.racers.length < 3) {
      throw Error('racers must be at least 3');
    }

    Promise.all(this.racers)
      .then(promises => Promise.all(promises.map(el => el.promice)))
      .then(
        results => {
          results.sort((prev, next) => {
            if (!prev.time) {
              return 1;
            }

            if (!next.time) {
              return -1;
            }

            return prev.time > next.time ? 1 : -1}
          );

          results.forEach(
            (el, index) => {
              const promise = this.racers.find(racer => racer.name === el.name);
              this.logResults(promise, index + 1, el, nameOfRacing);
            });

          this.readOffResults(results[0], nameOfRacing);
      });

    return this;
  }
}

const todos = new UrlRacer('https://jsonplaceholder.typicode.com/todos');
const users = new UrlRacer('https://jsonplaceholde.typicode.com/users');
const github = new UrlRacer('https://api.github.com/users/romasaldan');
const githubRepos = new UrlRacer('https://api.github.com/users/romasaldan/repos');

const arena = new Arena();

arena
  .registerRacer(todos)
  .registerRacer(users)
  .registerRacer(github)
  .startRacing('Tournament of three requests 2020')
  .registerRacer(githubRepos)

setTimeout(() => arena.startRacing('Tournament of four requests 2020'), 4000);

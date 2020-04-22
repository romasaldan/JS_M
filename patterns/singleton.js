class CommandLogger {
  constructor () {
    if (!CommandLogger.instance) {
      CommandLogger.instance = this;
      this.commandList = [];

      return this;
    }

    return CommandLogger.instance
  };

  addToCommandList(commandName) {
    this.commandList.push([commandName, new Date()]);
  }

  get commands () {
    return this.commandList;
  }
}

const a = new CommandLogger();
a.addToCommandList('createdLogger');

module.exports = {
  CommandLogger
}
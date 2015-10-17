let CommandLineInterpreter =  {
  run(command) {
    if (command === "help") {
      return `Command line v1.0
        Type 'help name' to find out more about the function 'name'.

        menu [name]  # navigates to menu
        help         # prints this help page
        `.replace(/\s/,"\u00a0");
    }

    return command + ": command not found. Type 'help' to get list of available commands";
  }
}

export default CommandLineInterpreter;

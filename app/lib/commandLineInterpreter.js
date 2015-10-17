let CommandLineInterpreter =  {
  run(command) {
    if (command.match(/help$/)) {
      return `Command line v1.0
        Type 'help name' to find out more about the function 'name'.

        menu [name]  # navigates to menu
        help         # prints this help page
        `.replace(/\s/,"\u00a0");
    } else if (command.match(/help\smenu$/)) {
      return `menu [--list] menu_name

        Opens meniu item. With argument --list you can see
        list of all available menu names:

          menu --list

        To open "About" page type:

          menu about
        `.replace(/\s/,"\u00a0");
    } else if (command.match(/menu\s--list$/)) {
      return `Availbale menus are:

        about # about page
        contacts # contacts page
        `.replace(/\s/,"\u00a0");
    }
    return command + ": command not found. Type 'help' to get list of available commands";
  }
}

export default CommandLineInterpreter;

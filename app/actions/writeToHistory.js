import CommandLineInterpreter from './../lib/commandLineInterpreter.js';

function writeToHistory(e, state) {
  if (e.keyCode === 13) { 
    let output = CommandLineInterpreter.run(state.get('inputText'));

    let commandHistory = state.get('history').map(x => x);
    commandHistory.push({
      command: state.get('inputText'),
      output: output,
    });
    state.set('history', commandHistory);
  }
}

export default writeToHistory;

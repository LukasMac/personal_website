import CommandLineInterpreter from './commandLineInterpreter.js';

function terminalStateReducer(state, e) {
    if (e.keyCode === 13) { 
      let output = CommandLineInterpreter.getOutput(state.inputText);

      state.history.push({
        command: state.inputText,
        output: output,
      });

      // CommandLineInterpreter.run(state.inputText, state);
    }

    // if ([37, 39].indexOf(e.keyCode) !== -1) {
    //   return;
    // }

    let length = state.inputText.length;
    let currentPosition = state.cursorPosition;

    if (e.keyCode == 13) {
      state.inputText = "";
      // Backspace
    } else if (e.keyCode == 8) {
      state.inputText =
          state.inputText.substring(0, length + currentPosition -1) +
          state.inputText.substring(length + currentPosition, length)
      // Delete
    } else if (e.keyCode == 46) {
      state.inputText =
          state.inputText.substring(0, length + currentPosition) +
          state.inputText.substring(length + currentPosition + 1, length)
    } else {
      let key = String.fromCharCode(e.keyCode).toLowerCase();
      if (e.keyCode === 32) {
        key = "\u00a0"
      }
      state.inputText =
          state.inputText.substring(0, length + currentPosition) +
          key +
          state.inputText.substring(length + currentPosition, length)
    }

    let currentCursorPosition = state.cursorPosition;
    let inputLength = state.inputText.length;
    if (e.keyCode == 13) {
      state.cursorPosition = 0;
      // Left
    } else if (e.keyCode == 37) {
      state.cursorPosition =
          Math.max(currentCursorPosition - 1, -inputLength)
      // Right
    } else if (e.keyCode == 39) {
      state.cursorPosition =
          Math.min(currentCursorPosition + 1, 0)
      // Backspace
    } else if (e.keyCode == 8) {
      // Delete
    } else if (e.keyCode == 46) {
      state.cursorPosition =
          Math.min(currentCursorPosition + 1, 0)
    }

    return state;
}

export default terminalStateReducer;

import CommandLineInterpreter from './commandLineInterpreter.js';

function terminalStateReducer(state, e) {
    if (e.keyCode === 13) {

      if (state.inputText.trim() !== "") {
        let output = CommandLineInterpreter.getOutput(state.inputText);

        state.history.push({
          command: state.inputText,
          output: output,
        });
      }

      // CommandLineInterpreter.run(state.inputText, state);
    }

    if ([38, 40].indexOf(e.keyCode) === -1) {
       state.historyPointer = -1;
    }

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
    } else if (e.keyCode == 37) {// Left
    } else if (e.keyCode == 39) {// Right
    } else if (e.keyCode == 38) {// Up
      state.historyPointer = Math.min(state.historyPointer + 1, state.history.length -1);
      let historyAtPointer = state.history[ state.history.length - state.historyPointer - 1];

      if (historyAtPointer) {
        state.inputText = historyAtPointer.command;
      } else {
        state.inputText = "";
      }
    } else if (e.keyCode == 40) {// Down
      state.historyPointer = Math.max(state.historyPointer - 1, -1);
      let historyAtPointer = state.history[ state.history.length - state.historyPointer - 1];

      if (historyAtPointer) {
        state.inputText = historyAtPointer.command;
      } else {
        state.inputText = "";
      }
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
    } else if (e.keyCode == 37) {// Left
      state.cursorPosition =
          Math.max(currentCursorPosition - 1, -inputLength)
    } else if (e.keyCode == 39) {// Right
      state.cursorPosition =
          Math.min(currentCursorPosition + 1, 0)
    } else if (e.keyCode == 38) {// Up
      state.cursorPosition = 0;
    } else if (e.keyCode == 40) {// Down
      state.cursorPosition = 0;
    } else if (e.keyCode == 8) {// Backspace
    } else if (e.keyCode == 46) {// Delete
      state.cursorPosition =
          Math.min(currentCursorPosition + 1, 0)
    }

    return state;
}

export default terminalStateReducer;

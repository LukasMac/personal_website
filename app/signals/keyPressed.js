import writeToHistory from './../actions/writeToHistory.js';
import runCommand from './../actions/runCommand.js';
import setInputText from './../actions/setInputText.js';
import setCursorPosition from './../actions/setCursorPosition.js';

export default [
  runCommand,
  writeToHistory,
  setInputText,
  setCursorPosition,
];

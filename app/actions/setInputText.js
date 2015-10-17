function setInputText(e, state) {
  if ([37, 39].indexOf(e.keyCode) !== -1) {
    return;
  }

  let length = state.get('inputText').length;
  let currentPosition = state.get('cursorPosition');

  if (e.keyCode == 13) {
    state.set('inputText', "");
  // Backspace
  } else if (e.keyCode == 8) {
    state.set('inputText',
      state.get('inputText').substring(0, length + currentPosition -1) +
      state.get('inputText').substring(length + currentPosition, length)
    );
  // Delete
  } else if (e.keyCode == 46) {
    state.set('inputText',
      state.get('inputText').substring(0, length + currentPosition) +
      state.get('inputText').substring(length + currentPosition + 1, length)
    );
  } else {
    state.set('inputText', state.get('inputText') + String.fromCharCode(e.keyCode).toLowerCase());
  }
}

export default setInputText;

function setCursorPosition(e, state) {
  let currentCursorPosition = state.get('cursorPosition');
  let inputLength = state.get('inputText').length;
  if (e.keyCode == 13) {
    state.set('cursorPosition', 0);
  // Left
  } else if (e.keyCode == 37) {
    state.set('cursorPosition',
      Math.max(currentCursorPosition - 1, -inputLength)
    );
  // Right
  } else if (e.keyCode == 39) {
    state.set('cursorPosition',
      Math.min(currentCursorPosition + 1, 0)
    );
  // Backspace
  } else if (e.keyCode == 8) {
  // Delete
  } else if (e.keyCode == 46) {
    state.set('cursorPosition',
      Math.min(currentCursorPosition + 1, 0)
    );
  }
}

export default setCursorPosition;

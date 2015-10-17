function setCursorPosition(e, state) {
  if (e.keyCode == 13) {
    state.set('cursorPosition', 0);
  // Left
  } else if (e.keyCode == 37) {
  // Right
  } else if (e.keyCode == 39) {
  }
}

export default setCursorPosition;

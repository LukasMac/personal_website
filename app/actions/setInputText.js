function setInputText(e, state) {
  if ([37, 39].indexOf(e.keyCode) !== -1) {
    return;
  }

  if (e.keyCode == 13) {
    state.set('inputText', "");
  } else {
    state.set('inputText', state.get('inputText') + String.fromCharCode(e.keyCode).toLowerCase());
  }
}

export default setInputText;

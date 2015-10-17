function writeToHistory(e, state) {
  if (e.keyIdentifier == "Enter") {
    var commandHistory = state.get('history').map(x => x);
    commandHistory.push(state.get('inputText'));
    state.set('history', commandHistory);
  }
}

export default writeToHistory;

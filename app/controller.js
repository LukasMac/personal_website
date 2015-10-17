import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  isLoading: false,
  inputText: "",
  cursorPosition: 0,
  shellPrompt: "> ",
  history: [ ],
  menuPage: "starter",
});

export default Controller(model);

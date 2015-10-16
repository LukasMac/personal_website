import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  isLoading: false,
});

export default Controller(model);

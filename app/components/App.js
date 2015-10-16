import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  isLoading: ['isLoading']
})
class App extends React.Component {
  componentDidMount() {
    console.log(this.props.isLoading);
    this.props.signals.appMounted();
  }

  render() {
    console.log(this.props.isLoading);
    return (
        <h1>Hello</h1>
        );
  }
}

module.exports = App;

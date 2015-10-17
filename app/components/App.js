import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

var _this = null;

@Cerebral({
  isLoading: ['isLoading'],
  inputText: ['inputText'],
  history: ['history'],
  shellPrompt: ['shellPrompt'],
  cursorPosition: ['cursorPosition'],
})
class App extends React.Component {
  componentDidMount() {
    _this = this;
    document.addEventListener('keyup', function (e) {
      _this.props.signals.keyPressed(e);
    });
    this.props.signals.appMounted();
  }

  renderHistory() {
    return (
        this.props.history.map(function(item, index) {
          return (<span key={index}>{item}<br /></span>);
        })
      );
  }

  renderInputTextWithCursor() {
    return(
      <span>{this.props.inputText}<span className="terminal-cursor">&nbsp;</span></span>
    );
  }

  render() {
    console.log(this.props.history);
    return (
      <div>
        <h1>Hello</h1>
        <div className="terminal-container">
          <div className="text-container">
          {this.renderHistory()}
          {this.props.shellPrompt}{this.renderInputTextWithCursor()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;

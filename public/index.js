import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTip from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    placements: [
      'up',
      'down',
      'left',
      'right',
      'up-left',
      'up-right',
      'down-left',
      'down-right'
    ]
  };

  render() {
    const { placements } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-tip">
        {placements.map((item) => {
          return (
            <ReactTip key={item} title={`abc.com - ${item}`} placement={item}>
              <button className="button is-fullwidth is-info">Abc.com - {item}</button>
            </ReactTip>
          );
        })}
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

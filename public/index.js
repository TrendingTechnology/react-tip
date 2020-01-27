import ReactTip from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
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
      <div className="app-container">
        {placements.map((item) => {
          return (
            <ReactTip key={item} title={`abc.com - ${item}`} placement={item}>
              <button>Abc.com - {item}</button>
            </ReactTip>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

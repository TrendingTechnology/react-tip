# react-tip
> Tooltip for react based on ballon.css.

## installation
```shell
npm install -S @feizheng/react-tip
```

## update
```shell
npm update @feizheng/react-tip
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| title     | String | -       | -           |
| placement | String | -       | -           |

```json
[
  "up",
  "down",
  "left",
  "right",
  "up-left",
  "up-right",
  "down-left",
  "down-right"
]
```

## usage
1. import css
  ```scss
  @import "balloon-css";
  @import "~@feizheng/react-tip/dist/style.scss";

  // customize your styles:
  $react-tip-options: ()
  ```
2. import js
  ```js
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

  ```

## documentation
- https://afeiship.github.io/react-tip/

## resources
- https://github.com/kazzkiq/balloon.css

# react-tip
> Tooltip for react based on ballon.css.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-tip
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| title     | string | false    | -       | The tooltip title.                    |
| placement | enum   | false    | 'up'    | The placement.                        |


## usage
1. import css
  ```scss
  // or use sass
  @import "balloon-css";
  @import "~@jswork/react-tip/dist/style.scss";

  // customize your styles:
  $react-tip-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTip from '@jswork/react-tip';
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

  ```

## documentation
- https://afeiship.github.io/react-tip/


## license
Code released under [the MIT license](https://github.com/afeiship/react-tip/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-tip
[version-url]: https://npmjs.org/package/@jswork/react-tip

[license-image]: https://img.shields.io/npm/l/@jswork/react-tip
[license-url]: https://github.com/afeiship/react-tip/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-tip
[size-url]: https://github.com/afeiship/react-tip/blob/master/dist/react-tip.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-tip
[download-url]: https://www.npmjs.com/package/@jswork/react-tip

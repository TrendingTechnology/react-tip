import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-tip';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    placement: PropTypes.oneOf([
      'up',
      'down',
      'left',
      'right',
      'up-left',
      'up-right',
      'down-left',
      'down-right'
    ])
  };

  static defaultProps = {
    placement: 'up'
  };

  render() {
    const { children, title, className, placement } = this.props;
    return React.cloneElement(children, {
      'aria-label': title,
      'data-balloon-pos': placement,
      className: classNames(CLASS_NAME,className),
      ...children.props
    });
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-tip';

export default class ReactTip extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The tooltip title.
     */
    title: PropTypes.string,
    /**
     * The placement.
     * https://github.com/kazzkiq/balloon.css
     */
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
      'className': classNames(CLASS_NAME, className),
      ...children.props
    });
  }
}

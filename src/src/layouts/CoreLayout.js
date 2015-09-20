import React from 'react';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

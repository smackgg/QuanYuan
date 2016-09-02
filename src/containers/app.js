import React from 'react';
import Nav from '../components/navBar';
export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    );
  },
});

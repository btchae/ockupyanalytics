import React, { Component, PropTypes } from 'react';
 
// Name component - represents a single todo item
export default class Name extends Component {
  render() {
    return (
      <li>{this.props.name.text}</li>
    );
  }
}
 
Name.propTypes = {
  // This component gets the name to display through a React prop.
  // We can use propTypes to indicate it is required
  name: PropTypes.object.isRequired,
};
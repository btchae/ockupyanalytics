import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Names } from '../api/names.js';

import Name from './Name.jsx';
 import AccountsUIWrapper from './AccountsUIWrapper.jsx';
 console.log('first');
// App component - represents the whole app
class App extends Component {
  renderNames() {
    return this.props.names.map((name) => (
      <Name key={name._id} name={name} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1 className={Meteor.user()}>Name List</h1>
        </header>
        <AccountsUIWrapper />
        <ul>
          {this.renderNames()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  names: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    currentUser: typeof Meteor.user(),
    names: Names.find({}).fetch(),
    someval: Meteor.userId()
  };
}, App);
console.log('last');
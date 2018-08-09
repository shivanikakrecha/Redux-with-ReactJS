import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>User Name:</h2>
          <UserList/>
          <hr/>
          <h2>User Details:</h2>
          <UserDetails/>
      </div>
    );
  }
}

export default App;

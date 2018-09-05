import React, { Component } from 'react';
import UserAppContainer from './containers/UserAppContainer';
import 'antd/dist/antd.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAppContainer />
      </div>
    );
  }
}

export default App;

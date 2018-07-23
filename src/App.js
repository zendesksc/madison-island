import React, { Component } from 'react';
import TabContainer from './containers/TabContainer';
import UserContainer from './containers/UserContainer';
import 'antd/dist/antd.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContainer />
        <TabContainer />
      </div>
    );
  }
}

export default App;

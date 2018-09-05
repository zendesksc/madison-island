import React, { Component } from 'react';
import TabContainer from './TabContainer';
import UserContainer from './UserContainer';
import 'antd/dist/antd.css';
import '../style.css';

class UserAppContainer extends Component {
  render() {
    return (
      <div className="UserAppContainer">
        <UserContainer />
        <TabContainer />
      </div>
    );
  }
}

export default UserAppContainer;

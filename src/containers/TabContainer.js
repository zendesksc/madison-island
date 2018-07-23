import React, { Component } from 'react'
import { Tabs, Icon, Tooltip } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class TabContainer extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={
          <Tooltip title="Purchases" placement="bottom">
            <Icon type="shopping-cart" />
            <span>Purchases</span>
          </Tooltip>
        } key="1">Purchases</TabPane>
        <TabPane tab={
          <Tooltip title="Loyalty Profile" placement="bottom">
            <Icon type="profile" />
            <span>Loyalty Profile</span>
          </Tooltip>
        } key="2">Profile</TabPane>
      </Tabs>
    )
  }
}

export default TabContainer

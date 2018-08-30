import React, { Component } from 'react'
import UserInfoContainer from './UserInfoContainer'
import OrdersContainer from './OrdersContainer'
import LoyaltyContainer from './LoyaltyContainer'
import BasketContainer from './BasketContainer'
import { Tabs, Icon, Tooltip } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  switch (key) {
    case '1':
      window.client.invoke('resize', { width: '100%', height: '28px' })
      break
    case '2':
      window.client.invoke('resize', { width: '100%', height: '450px' })
      break
    case '3':
      window.client.invoke('resize', { width: '100%', height: '490px' })
      break
    case '4':
      window.client.invoke('resize', { width: '100%', height: '330px' })
      break
    default:
      window.client.invoke('resize', { width: '100%', height: '28px' })
      break
  }
}

class TabContainer extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={
          <Tooltip title="User Info" placement="bottom">
            <Icon type="user" />
          </Tooltip>
        } key="1"><UserInfoContainer /></TabPane>
        <TabPane tab={
          <Tooltip title="Orders" placement="bottom">
            <Icon type="book" />
          </Tooltip>
        } key="2"><OrdersContainer /></TabPane>
        <TabPane tab={
          <Tooltip title="Loyalty" placement="bottom">
            <Icon type="heart-o" />
          </Tooltip>
        } key="3"><LoyaltyContainer /></TabPane>
        <TabPane tab={
          <Tooltip title="Basket" placement="bottom">
            <Icon type="shopping-cart" />
          </Tooltip>
        } key="4"><BasketContainer /></TabPane>
      </Tabs>
    )
  }
}

export default TabContainer

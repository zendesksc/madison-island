import React, { Component } from 'react'
import OrdersContainer from './OrdersContainer'
import LoyaltyContainer from './LoyaltyContainer'
import BasketContainer from './BasketContainer'
import { Tabs, Icon, Tooltip } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class TabContainer extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="3" onChange={callback}>
        <TabPane tab={
          <Tooltip title="Orders" placement="bottom">
            <Icon type="rocket" />
            <span>Orders</span>
          </Tooltip>
        } key="1"><OrdersContainer /></TabPane>
        <TabPane tab={
          <Tooltip title="Loyalty" placement="bottom">
            <Icon type="heart-o" />
            <span>Loyalty</span>
          </Tooltip>
        } key="2"><LoyaltyContainer /></TabPane>
        <TabPane tab={
          <Tooltip title="Basket" placement="bottom">
            <Icon type="shopping-cart" />
            <span>Basket</span>
          </Tooltip>
        } key="3"><BasketContainer /></TabPane>
      </Tabs>
    )
  }
}

export default TabContainer

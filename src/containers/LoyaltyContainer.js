import React, { Component } from 'react'
import { Icon, Table, Divider } from 'antd'

class LoyaltyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'Gold',
      cardNumber: '969504130',
      balance: 103,
      orders: '12',
      spent: '$6534',
      table: {
        dataSource: [{
          key: '1',
          discount: 'SUMMER10',
          source: 'Email Campaign',
          status: 'used'
        },
        {
          key: '2',
          discount: 'FRESHDAYS30',
          source: 'SMS outbound',
          status: 'unused'
        },
        {
          key: '3',
          discount: 'FLASHSALES',
          source: 'Email Campaign',
          status: 'expired'
        }],
        columns: [{
          title: 'Discount',
          dataIndex: 'discount',
          key: 'discount',
        }, {
          title: 'Source',
          dataIndex: 'source',
          key: 'source',
        }, {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        }]
      }
    }
  }

  render() {
    return (
      <div className="LoyaltyContainer">
        <div>
          <div><Icon type="star-o" /> Status: {this.state.status}</div>
          <div><Icon type="credit-card" /> Card Number: {this.state.cardNumber}</div>
          <div><Icon type="book" /> Balance: {this.state.balance}</div>
          <div><Icon type="tag-o" /> Orders: {this.state.orders}</div>
          <div><Icon type="wallet" /> Total Spent: {this.state.spent}</div>
        </div>
        <Divider />
        <div>
          <h4>Discount Vouchers</h4>
          <Table
            columns={this.state.table.columns}
            dataSource={this.state.table.dataSource}
            size="small"
            pagination={false}
          />
        </div>
      </div>
    )
  }
}

export default LoyaltyContainer

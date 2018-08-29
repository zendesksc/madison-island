import React, { Component } from 'react'
import { Table } from 'antd'

class OrdersContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: {
        table: {
          dataSource: [{
            key: '1',
            id: '#543-12345',
            description: 'An item of clothing',
            price: '£250',
            quantity: '1'
          },
          {
            key: '2',
            id: '#543-12345',
            description: 'An item of clothing',
            price: '£250',
            quantity: '1'
          }],
          columns: [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          }, {
            title: 'Desc.',
            dataIndex: 'description',
            key: 'description',
          }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          }, {
            title: 'QTY',
            dataIndex: 'quantity',
            key: 'quantity',
          }]
        }
      },
      past: {
        table: {
          dataSource: [{
            key: '1',
            id: '#543-12345',
            description: 'An item of clothing',
            price: '£250',
            quantity: '1'
          },
          {
            key: '2',
            id: '#543-12345',
            description: 'An item of clothing',
            price: '£250',
            quantity: '1'
          }],
          columns: [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          }, {
            title: 'Desc.',
            dataIndex: 'description',
            key: 'description',
          }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          }, {
            title: 'QTY',
            dataIndex: 'quantity',
            key: 'quantity',
          }]
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <h4>Current Order</h4>
          <Table columns={this.state.current.table.columns} dataSource={this.state.current.table.dataSource} size="small" />
        </div>
        <div>
          <h4>Past Orders</h4>
          <Table columns={this.state.past.table.columns} dataSource={this.state.past.table.dataSource} size="small" />
        </div>
      </div>
    )
  }
}

export default OrdersContainer
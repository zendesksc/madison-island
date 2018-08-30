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
            id: '#384-91742',
            description: 'Crew Neck Sweater',
            price: '€25',
            quantity: '1'
          },
          {
            key: '2',
            id: '#436-46291',
            description: 'Skinny Fit Jeans',
            price: '€34',
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
            id: '#567-92711',
            description: 'Wool Mini Skirt',
            price: '€25',
            quantity: '2'
          },
          {
            key: '2',
            id: '#782-73942',
            description: 'High neck t-shirt',
            price: '€25',
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
          <Table
            columns={this.state.current.table.columns}
            dataSource={this.state.current.table.dataSource}
            size="small"
            pagination={false}
          />
        </div>
        <br />
        <div>
          <h4>Past Orders</h4>
          <Table
            columns={this.state.past.table.columns}
            dataSource={this.state.past.table.dataSource}
            size="small"
            pagination={false}
          />
        </div>
      </div>
    )
  }
}

export default OrdersContainer
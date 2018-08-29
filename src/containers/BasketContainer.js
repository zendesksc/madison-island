import React, { Component } from 'react'
import { Table, Button } from 'antd'

class BasketContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  render() {
    return (
      <div>
        <Table
          columns={this.state.table.columns}
          dataSource={this.state.table.dataSource}
          size="small"
          pagination={false}
        />
        <br />
        <Button block={true} className="MakePurchaseButton">Make Purchase</Button>
      </div>
    )
  }
}

export default BasketContainer
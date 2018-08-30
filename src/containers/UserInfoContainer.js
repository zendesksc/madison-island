import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'

class UserInfoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '123 Fake Street',
      date_of_birth: '01/01/01'
    }
  }

  componentDidMount() {
    let requester = {}

    window.client.get('ticket.requester').then((data) => {
      requester = data['ticket.requester']
      return window.client.request(`/api/v2/users/${requester.id}.json`)
    }).then((data) => {
      requester.address = data['user'].user_fields.address
      requester.date_of_birth = data['user'].user_fields.date_of_birth
    }).then(() => {
      this.setState({
        address: requester.address,
        date_of_birth: requester.date_of_birth
      })
    })
  }

  render() {
    return (
      <div className="UserInfoContainer">
        <div>
          <h4>Address</h4>
          <p>{this.state.address}</p>
        </div>
        <div>
          <h4>Date of Birth</h4>
          <p>{this.state.date_of_birth}</p>
        </div>
      </div>
    )
  }
}

export default UserInfoContainer

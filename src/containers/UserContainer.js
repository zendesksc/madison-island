import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'

class UserContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: '',
      name: 'Adam Gray',
      email: 'agray@zendesk.com',
      phone: '+441234567890'
    }
  }

  componentDidMount() {
    window.client.invoke('resize', { width: '100%', height: '280px' })

    let requester = {}

    window.client.get('ticket.requester').then((data) => {
      requester = data['ticket.requester']
      return window.client.request(`/api/v2/users/${requester.id}.json`)
    }).then((data) => {
      requester.phone = data['user'].phone
    }).then(() => {
      this.setState({
        avatar: requester.avatarUrl,
        name: requester.name,
        email: requester.email,
        phone: requester.phone
      })
    })
  }

  render() {
    return (
      <div className="UserContainer">
        <Row type="flex" justify="center">
          <Avatar size="large" icon="user" src={this.state.avatar} className="UserContainerAvatar" />
        </Row>
        <Row type="flex" justify="center" className="UserContainerInfo">
          <Col span={24}>
            <h2 className="UserContainerName">{this.state.name}</h2>
            <div className="UserContainerEmail">
              <span>{this.state.email}</span>
            </div>
            <div className="UserContainerPhone">
              <span>{this.state.phone}</span>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserContainer

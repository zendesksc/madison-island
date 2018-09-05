import React, { Component } from 'react';
import { Input, List, Avatar, Icon, Spin } from 'antd';

const Search = Input.Search

class SearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      foundUsers: []
    }

    this.searchForUser = this.searchForUser.bind(this)
  }

  componentDidMount() {
    window.client.invoke('resize', { width: '100%', height: '70px' })
  }

  searchForUser(value) {
    this.setState({ isLoading: true })

    window.client.request(`/api/v2/users/search.json?query=${value}`)
      .then((data) => {
        this.setState({ foundUsers: data.users, isLoading: false })

        // If there are less than 10 users returned, change the height of the app to fit them,
        // if there are more, just set the app height to 280 and make the user scroll
        if (data.users.length < 10) {
          window.client.invoke('resize', { width: '100%', height: `${60 * (data.users.length + 1)}px` })
        } else {
          window.client.invoke('resize', { width: '100%', height: `280px` })
        }
      })
      .catch((err) => window.client.invoke('error', `${err}`))
  }

  addToTicket(user) {
    window.client.set('ticket.requester', { email: user.email, name: user.name })
      .then(() => window.client.invoke('notify', `${user.name} added to ticket.`))
      .catch((err) => window.client.invoke('error', `${err}`))
  }

  render() {

    return (
      <div className="SearchContainer">
        <Spin spinning={this.state.isLoading}>
          <Search
            placeholder="Search for a customer."
            onSearch={this.searchForUser}
            enterButton={<Icon type="search" />} />
          <List
            itemLayout="horizontal"
            dataSource={this.state.foundUsers}
            renderItem={user => (
              <List.Item actions={[<a onClick={this.addToTicket.bind(this, user)}>Add to Ticket</a>]}>
                <List.Item.Meta
                  avatar={<Avatar src={user.photo !== null ? user.photo.content_url : ""} />}
                  title={user.name}
                  description={user.email}
                />
              </List.Item>
            )}

          />
        </Spin>
      </div >
    );

  }
}

export default SearchContainer;

import React, { Component } from 'react';
import { Input, List, Avatar } from 'antd';

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
    window.client.request(`/api/v2/users/search.json?query=${value}`)
      .then((data) => {
        this.setState({ foundUsers: data.users })
        window.client.invoke('resize', { width: '100%', height: `${60 * (data.users.length + 1)}px` })
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
        <Search
          placeholder="Search for a customer."
          onSearch={this.searchForUser}
          enterButton />
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
      </div>
    );

  }
}

export default SearchContainer;

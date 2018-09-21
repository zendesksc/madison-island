import React, { Component } from 'react'

function toTitleCase(str) {
  return str.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

class UserInfoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: []
    }
  }

  componentDidMount() {
    let requester = {}

    window.client.get('ticket.requester').then((data) => {
      requester = data['ticket.requester']
      return window.client.request(`/api/v2/users/${requester.id}.json`)
    }).then((data) => {
      let fieldsToSet = []
      let userFields = data['user'].user_fields

      Object.keys(userFields).forEach((key) => {
        fieldsToSet.push({
          label: toTitleCase(key),
          value: userFields[key]
        })
      })

      this.setState({
        fields: fieldsToSet
      })

    })
  }

  render() {
    let fields = this.state.fields.map((field) => {
      if (field.value === null) {
        return null
      }

      if (field.label.includes('System:')) {
        return null
      }

      return (
        <div key={field.label}>
          <h4>{field.label}</h4>
          <p>{field.value}</p>
        </div>
      )
    }).filter((field) => field !== null)

    // set the height of the app based on how many fields show, 49 is the heigh of one field
    window.client.invoke('resize', { width: '100%', height: 200 + (49 * (fields.length + 1)) + 'px' })

    return (
      <div className="UserInfoContainer">
        {fields.length > 0 ? fields : 'No user fields found.'}
      </div>
    )
  }
}

export default UserInfoContainer

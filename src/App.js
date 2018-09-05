import React, { Component } from 'react';
import UserAppContainer from './containers/UserAppContainer';
import SearchContainer from './containers/SearchContainer';
import 'antd/dist/antd.css';
import './style.css';

const MODES = {
  SEARCH: 0,
  USER: 1
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: MODES.SEARCH
    }
  }

  componentDidMount() {
    window.client.get(`ticket.requester`)
      .then((data) => {
        let requester = data['ticket.requester']

        if (requester.name.match(/Caller|Visitor/)) {
          this.setMode(MODES.SEARCH)
        } else {
          this.setMode(MODES.USER)
        }

      })
      .catch((err) => window.client.invoke('error', `${err}`))
  }

  setMode(mode) {
    this.setState({
      mode: mode
    })
  }

  render() {

    if (this.state.mode === MODES.SEARCH) {
      return (
        <div className="App">
          <SearchContainer onRequesterSet={this.setMode.bind(this, MODES.USER)} />
        </div>
      );
    }

    if (this.state.mode === MODES.USER) {
      return (
        <div className="App">
          <UserAppContainer />
        </div>
      );
    }

  }
}

export default App;

import React from 'react'
import { Link } from 'react-router'
import auth from '../utils/auth'

const App = React.createClass({

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
   // auth.login()
  },

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/page2">Page Two</Link> (authenticated)</li>
          <li> <Link to="/register">register</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})

export default App

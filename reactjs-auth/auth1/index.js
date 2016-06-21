import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'
import About from './examples/auth-with-shared-root/components/About'
import App from './examples/auth-with-shared-root/components/App'
import Login from './examples/auth-with-shared-root/components/Login'
import Logout from './examples/auth-with-shared-root/components/Logout'
import Register from './examples/auth-with-shared-root/components/Register'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="/about" component={About}/>
     <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
), document.getElementById('app'))

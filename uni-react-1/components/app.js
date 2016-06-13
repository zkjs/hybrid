import React from 'react';
import { Link } from 'react-router';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to my App</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/web/about'>About</Link></li>
          <li><Link to='/web/login'>Login </Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

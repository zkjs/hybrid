/**
 * Created by qinyejun on 6/18/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }


  render() {
    return <div>goodbye!</div>
  }
}

export default connect(null,actions)(Signout);
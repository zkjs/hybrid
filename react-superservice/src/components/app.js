import React, { Component } from 'react';
import Menu from './menu';
import ItemList from './../containers/item-list';
import ItemDetail from '../containers/item-detail';

export default class App extends Component {
  render() {
    return (
        <div>
          <div className="header">
            <div className="header-content">
              <Menu items = { ['Home','Service','About'] }/>
            </div>
          </div>
          <div className="content">
            <ItemList />
            <ItemDetail />
          </div>
        </div>
    );
  }
}

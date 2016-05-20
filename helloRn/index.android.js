/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, { Component } from 'react';

import {
    AppRegistry,
    BackAndroid,
    Text,
    View,
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    ToastAndroid,
    }  from 'react-native';



var SplashScreen = require('./SplashScreen');
var ImageTest = require('./ImageTest');
var Test1 = require('./Test1');
var ListViewTest = require('./ListViewTest');
var ToastExample = require('./ToastExample');
//var ModalTest = require('./ModalTest')

var _navigator;



class MyProject extends Component{
  constructor(props: any) {
    super(props);
    this.state =  {
      splashed: true,
    };
  }

  RouteMapper(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'home') {
      return (
          <View style={styles.container}>
            <ToastExample navigator={navigationOperations}/>
          </View>
      );
    }
  }
  render() {
    if (this.state.splashed) {
      var initialRoute = {name: 'home'};
      return (
          <Navigator
              style={styles.container}
              initialRoute={initialRoute}
              configureScene={() => Navigator.SceneConfigs.FadeAndroid}
              renderScene={this.RouteMapper}
              />
      );
    } else {
      return (
          <SplashScreen />
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);


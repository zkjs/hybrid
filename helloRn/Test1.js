/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
    TouchableOpacity,
    DrawerLayoutAndroid,
    LayoutAnimation

} from 'react-native';



var Test1 = React.createClass({
  componentWillMount() {
    // 创建动画
    LayoutAnimation.spring();
  },

  getInitialState() {
    return { w: 100, h: 100 }
  },

  _onPress() {
    // 让视图的尺寸变化以动画形式展现
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  },

  _onChange(){
    // 让视图的尺寸变化以动画形式展现
    LayoutAnimation.spring();
    this.setState({w: this.state.w - 15, h: this.state.h - 15})
  },

  render: function() {
    var navigationView = (
        <TouchableOpacity onPress={()=>alert("你点到我了")}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
        </TouchableOpacity>
    );
    return (
    <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />


        <View style={styles.container2}>
          <TouchableOpacity onPress={this._onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>放大</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onChange}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>缩小</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Image
            style={styles.imagetype}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            />

      </View>
    </DrawerLayoutAndroid>


    );
  }
});



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color:'#000000',
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imagetype:{
    width:90,
    height:90,
    margin:0
  },
  box:{
    backgroundColor:"#ff0000"
  },
  button:{
    backgroundColor:"#000000",
    width:100,
    height:40,
    alignItems: 'center',
    margin:10
  },
  buttonText:{
    fontSize: 20,
    color:'#ffffff',
    textAlign: 'center',
  },

});

module.exports = Test1;

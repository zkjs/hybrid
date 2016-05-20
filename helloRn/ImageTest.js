/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TouchableOpacity,
} from 'react-native';

class ImageTest extends Component {
  justForTest(){
    alert("开启身份");
  }
  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={this.justForTest}>
              <Image source={require('./img_kaiqi.png')} />
            </TouchableOpacity>

          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                 style={{width: 40, height: 40}} />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = ImageTest;

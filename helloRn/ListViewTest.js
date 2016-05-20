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
    TouchableHighlight,
    ListView,
} from 'react-native';

class ListViewTest extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows()),
    };
  }

  _genRows(){
    var dataBlob = [];

    for(let i=0;i<100;i++){
      let temp = {};
      temp.id = i;
      temp.text = "row"+( parseInt(i)+1);
      dataBlob.push(temp);
    }
    return dataBlob;
  }

  render() {
    return (

        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            />

    );
  }

  _renderRow(rowData:Object, sectionID: number, rowID: number){
    return (
        <TouchableHighlight onPress={() =>{let index = parseInt(rowID) + 1;let str = '你点击了第'+index+'行'; alert(str)} }>
          <View>
            <View style={styles.row}>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={{width: 40, height: 40}} />
              <Text style={styles.text}>
                {rowData.text}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

module.exports = ListViewTest;

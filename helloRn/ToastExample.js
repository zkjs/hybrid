'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableWithoutFeedback,
    } = React;

var UIExplorerBlock = require('UIExplorerBlock');
var UIExplorerPage = require('UIExplorerPage');

var ToastExample = React.createClass({

  statics: {
    title: 'Toast Example',
    description: 'Example that demonstrates the use of an Android Toast to provide feedback.',
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
        <UIExplorerPage title="ToastAndroid">
          <UIExplorerBlock title="Simple toast">
            <TouchableWithoutFeedback
                onPress={() =>
              ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>
              <Text style={styles.text}>Click me.</Text>
            </TouchableWithoutFeedback>
          </UIExplorerBlock>
          <UIExplorerBlock title="Toast with long duration">
            <TouchableWithoutFeedback
                onPress={() =>
              ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
              <Text style={styles.text}>Click me too.</Text>
            </TouchableWithoutFeedback>
          </UIExplorerBlock>
        </UIExplorerPage>
    );
  },
});

var styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

module.exports = ToastExample;
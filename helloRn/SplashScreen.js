

var React = require('react-native');
var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

var Animated = require('Animated');

var SplashScreen = React.createClass({

  getInitialState: function() {
    return {
      bounceValue: new Animated.Value(1),
    };
  },
  componentDidMount: function() {
    this.state.bounceValue.setValue(1);
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1.2,
        duration: 5000,
      }
    ).start();
  },
  render: function() {

    return(
      <View style={styles.container}>
        <Animated.Image
          source={{uri:  'http://facebook.github.io/react/img/logo_og.png'}}
          style={{
            width: 90,
            height: 90,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
        <Text style={styles.text}>
            ’‚ «∆Ù∂Ø“≥
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    color:'#ffffff',
    textAlign: 'center',
    margin:20,
  }
});

module.exports = SplashScreen;

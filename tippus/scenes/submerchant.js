'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Submerchant = React.createClass({
  render: function() {
    return (
      <View style={pageStyle.container}>
        <Text style={pageStyle.welcome}>
          Form to fill out banking information
        </Text>
      </View>
    );
  }
});


var pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C6BC0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Submerchant;


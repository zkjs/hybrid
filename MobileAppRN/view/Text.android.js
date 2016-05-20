'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Text,
    } = ReactNative;


var TextView = React.createClass({

    render: function() {
        return (
            <Text style={{fontWeight: 'bold', color: '#527fe4'}}>
                {"hello text"}
            </Text>
        );
    }
});

module.exports = TextView;
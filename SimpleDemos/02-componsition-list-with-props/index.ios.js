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
  View
} from 'react-native';

import DayItem from './src/day-item';

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class SimpleDemos extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        {this.daysText()}
      </View>
    )
  }

  daysText() {
    return DAYS.map(function(dayItem){
      // Called 7 times, one for each day of the week
      return (
        <DayItem day={dayItem} />
      )
    });
  }
}

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
});

AppRegistry.registerComponent('SimpleDemos', () => SimpleDemos);


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import DayItem from './src/day-item';


class SimpleDemos extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of one week from today:
        </Text>
        {this.daysText()}
      </View>)
  }

  daysText() {
    var daysArr = [];
    for(let i = 0; i < 7; i++) {
      //moment.js详细用法可以查看官网
      var dayItem = Moment().add(i, 'days').format('dddd');
      daysArr.push(
        <DayItem day={dayItem} daysIndex={i+1} key={i}/>
      )
    }
    return daysArr;
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

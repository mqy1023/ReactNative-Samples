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

class Stopwatch extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
    );
  }

  startStopButton() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  }
  lapButton() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire the screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 3
  },
  footer: { // Blue
    flex: 5
  },
  timerWrapper: { // Red
    flex: 5, // takes up 5/8ths of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3, // takes up 3/8ths of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

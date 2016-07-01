
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import FormatTime from 'minutes-seconds-milliseconds';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeElapsed: null,
      isRunning: false
    };

    this._handleStartPress = this._handleStartPress.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {FormatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
    );
  }

  startStopButton() {
    var styleButton = this.state.isRunning ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="gray"
      onPress={this._handleStartPress}
      style={[styles.button, styleButton]}
      >
      <Text>
        {this.state.isRunning ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  }
  lapButton() {
    return <View style={styles.button}>
      <Text>
        Lap
      </Text>
    </View>
  }
  _handleStartPress() {

    if(this.state.isRunning){
      clearInterval(this.interval);
      this.setState({isRunning: false});
      return
    }

    var startTime = new Date();

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime,
        isRunning:true
      });
    }, 30);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire the screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 2
  },
  footer: { // Blue
    flex: 3
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
  },
  timer: {
    fontSize: 50
  },
  button: {
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

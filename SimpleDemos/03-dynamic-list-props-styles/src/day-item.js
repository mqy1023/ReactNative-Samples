// Import some code we need
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class DayItem extends Component {

  render() {
    return <Text style={this.myStyle()}>
      {this.props.day}
    </Text>
  }

  myStyle() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color() {
    var opacity = 1 / this.props.daysIndex;
    return 'rgba(0, 0, 0, '+ opacity + ')';
  }
  fontWeight() {
    var weight = 8 - this.props.daysIndex;
    return (weight * 100).toString();
  }
  fontSize() {
    return 50 - 5 * this.props.daysIndex;
  }
  lineHeight() {
    return 60 - 4 * this.props.daysIndex;
  }
}

// Make this code available elsewhere
export default DayItem;

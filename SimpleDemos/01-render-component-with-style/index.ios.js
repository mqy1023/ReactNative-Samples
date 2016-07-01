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


class SimpleDemos extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
    </View>
  )
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

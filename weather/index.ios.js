
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

let pins = [{
      latitude: 27,
      longitude: 120
    }];

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin:{
        latitude: 30,
        longitude: 120
      }
    }
    this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this);
  }
  render() {
    return (
      <MapView style={styles.map}
        annotations={[this.state.pin]}
        onRegionChangeComplete={this._onRegionChangeComplete}
        >

      </MapView>
    );
  }
  _onRegionChangeComplete(region) {
    this.setState({
          pin: {
            longitude: region.longitude,
            latitude: region.latitude
          }
        });
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);

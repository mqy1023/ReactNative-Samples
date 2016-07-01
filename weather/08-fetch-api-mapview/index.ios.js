
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

// let API_KEY = '23d2d7bc96c9e6fe680a84360e713f7f';
//API地址
let ROOT_URL= 'http://api.openweathermap.org/data/2.5/weather?APPID=23d2d7bc96c9e6fe680a84360e713f7f';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin:{
        latitude: 40,
        longitude: 120
      },
      city: '',
      temperature: '',
      description: ''
    }
    this._onRegionChangeComplete = this._onRegionChangeComplete.bind(this);
  }
  render() {
    return ( <View style={styles.container}>
      <MapView style={styles.map}
        annotations={[this.state.pin]}
        onRegionChangeComplete={this._onRegionChangeComplete}
        >
      </MapView>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{this.state.city}</Text>
        <Text style={styles.text}>{this.state.temperature}</Text>
        <Text style={styles.text}>{this.state.description}</Text>
      </View>
      </View>
    );
  }
  _onRegionChangeComplete(region) {

    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });
    this._fetchData(region);
  }

  _fetchData(region) {
    let url = `${ROOT_URL}&lat=${region.latitude}&lon=${region.longitude}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({city: responseData.name});
        this.setState({temperature: responseData.main.temp});
        this.setState({description: responseData.weather[0].description});
      })
      .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 3,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);

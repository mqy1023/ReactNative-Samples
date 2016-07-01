
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './components/authentication/signin'

//LeanCloud后台服务
import LeanCloudApp from 'leancloud-storage';
let APP_ID = 'lnSHwfVGSPcTuRIsP0mDyNOt-gzGzoHsz';
let APP_KEY = 'lBlITfJMIal2zrrI7JC7zRpr';

class App extends Component {

  componentWillMount() {
    LeanCloudApp.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;

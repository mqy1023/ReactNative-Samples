
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import SignIn from './components/authentication/signin'
import SignUp from './components/authentication/signup'

import  Tweets from './components/tweets/tweets';

//LeanCloud后台服务
import LeanCloudApp from 'leancloud-storage';
let APP_ID = 'lnSHwfVGSPcTuRIsP0mDyNOt-gzGzoHsz';
let APP_KEY = 'lBlITfJMIal2zrrI7JC7zRpr';

//key -> Component
let ROUTES = {
  signin: SignIn,
  signup: SignUp,
  tweets: Tweets
}

class App extends Component {

  componentWillMount() {
    LeanCloudApp.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  }

  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this._renderScene}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}>
      </Navigator>
    );
  }
  _renderScene(route, navigator) {
    //ROUTES['signin'] => SignIn
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

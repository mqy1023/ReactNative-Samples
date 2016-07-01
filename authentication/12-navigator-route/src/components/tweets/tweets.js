
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

//LeanCloud后台服务
import LeanCloudApp from 'leancloud-storage';

class Tweets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    //当前用户名
    this.setState({user: LeanCloudApp.User.current()});
  }

  render() {
    if (!this.state.user) {
      return <Text>Loading...</Text>;
    }

    var username = this.state.user.get('username');

    return (
      <View style={styles.container}>
        <Text>Welcome back, {username}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Tweets;

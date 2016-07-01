
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import ButtonCom from '../common/button';

//LeanCloud后台服务
import LeanCloudApp from 'leancloud-storage';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginMsg: ''
    }
    this._onPressSignIn = this._onPressSignIn.bind(this);
    this._onPressSignUp = this._onPressSignUp.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In Page</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tom"
          onChangeText={(textVal) => this.setState({username: textVal})}
         />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          placeholder="Tom123456"
          onChangeText={(textVal) => this.setState({password: textVal})}
          />
        <Text style={styles.label}>{this.state.loginMsg}</Text>
        <ButtonCom text={'Sign In'} onPress={this._onPressSignIn} />
        <ButtonCom text={'I need an account...'} onPress={this._onPressSignUp} />
     </View>
    );
  }
  //注册
  _onPressSignUp() {
    //navigator over to signup
    this.props.navigator.push({name: 'signup'});

  }
  //登录
  _onPressSignIn() {
    LeanCloudApp.User.logIn(`${this.state.username}`, `${this.state.password}`).then((loginedUser) => {
      // this.setState({loginMsg: loginedUser.id + '的用户,登录成功!'});
      this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
    }, (errorMsg) => {
      this.setState({loginMsg: '错误: ' + errorMsg.message});
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
export default SignIn;

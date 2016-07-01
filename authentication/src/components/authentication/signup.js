
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import ButtonCom from '../common/button';
//LeanCloud后台服务
import LeanCloudApp from 'leancloud-storage';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
    this._onSignUpPress = this._onSignUpPress.bind(this);
    this._onSigninPress = this._onSigninPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up Page</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input} />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          style={styles.input} />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <ButtonCom text={'SignUp'} onPress={this._onSignUpPress} />
        <ButtonCom text={'I have an account...'} onPress={this._onSigninPress} />
      </View>
    );
  }
  _onSignUpPress() {
    if(this.state.password !== this.state.passwordConfirmation) {
      return this.setState({errorMessage: 'Your passwords do not match'});
    }
    if(this.state.username.trim() && this.state.password.trim() && this.state.passwordConfirmation.trim()) {
      // 新建 AVUser 对象实例
      var user = new LeanCloudApp.User();
      // 设置用户名
      user.setUsername(`${this.state.username}`);
      // 设置密码
      user.setPassword(`${this.state.password}`);
      // // 设置邮箱
      // user.setEmail('tom@leancloud.cn');
      user.signUp().then((loginedUser) => {
        // console.log(loginedUser);
        this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
      }, (error) => {
        this.setState({errorMessage: error.message});
      });
    } else {
      alert('please input username & password!');
    }

  }

  _onSigninPress() {
    this.props.navigator.pop();//出栈，返回上个route
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
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
  }
});

export default SignUp;

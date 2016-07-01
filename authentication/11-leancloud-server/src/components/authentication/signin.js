
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
    this._onPress = this._onPress.bind(this);
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
        <ButtonCom text={'Click Sign In'} onPress={this._onPress} />
     </View>
    );
  }
  _onPress() {
  /* 可以先注册一个账号
  // 新建 AVUser 对象实例
  // var user = new LeanCloudApp.User();
  // // 设置用户名
  // user.setUsername('Tom');
  // // 设置密码
  // user.setPassword('Tom123456');
  // // 设置邮箱
  // user.setEmail('279371794@qq.com');
  // user.signUp().then(function (loginedUser) {
  //     console.log(loginedUser);
  // }, (function (error) {
  //   console.log(loginedUser);
  // }));
  */
    LeanCloudApp.User.logIn(`${this.state.username}`, `${this.state.password}`).then((loginedUser) => {
      this.setState({loginMsg: loginedUser.id + '的用户,登录成功!'});
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

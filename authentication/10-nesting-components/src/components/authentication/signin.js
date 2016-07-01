
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import ButtonCom from '../common/button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
          onChangeText={(textVal) => this.setState({username: textVal})}
         />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(textVal) => this.setState({password: textVal})}
          />
        <ButtonCom text={'Click Sign In'} onPress={this._onPress} />
     </View>
    );
  }
  _onPress() {
    this.setState({password: ''});
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

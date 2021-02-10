import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import PTButton from '../commonComponent/Button';
import { calcScale } from '../../utils/dimension';
import CommonStyle from './Styles';

export default class LoginView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (username) => {
    this.setState({ username: username });
  };

  handlePassword = (password) => {
    this.setState({ password: password });
  };

  login = (username, password) => {
    this.props.navigation.navigate('DrawerInside');
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require('../../assets/images/background-login.png')}
            style={styles.backgroundImage}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Welcome</Text>
              <Text style={styles.caption}>Sign in to continues</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={this.handleUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={this.handlePassword}
                secureTextEntry={true}
              />
              <View style={{ alignItems: 'center' }}>
                <PTButton
                  title="Login"
                  onPress={() =>
                    this.login(this.state.username, this.state.password)
                  }
                  style={styles.loginButton}
                />
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

//  navigation.navigate('DrawerInside');

const styles = StyleSheet.create({
  container: {
    ...CommonStyle.container,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    margin: calcScale(80),
    justifyContent: 'center',
    paddingTop: calcScale(250),
  },
  title: {
    ...CommonStyle.textBold,
    fontSize: 25,
    color: '#0066ff',
  },
  caption: {
    ...CommonStyle.textRegular,
    fontSize: 18,
    color: '#000',
  },
  input: {
    ...CommonStyle.textInput,
    marginTop: calcScale(15),
    paddingLeft: calcScale(10),
    paddingRight: calcScale(10),
    backgroundColor: '#e8f0fe',
    borderRadius: 5,
  },
  loginButton: {
    marginTop: calcScale(20),
    width: calcScale(150),
    height: calcScale(50),
    borderRadius: 5,
  },
});

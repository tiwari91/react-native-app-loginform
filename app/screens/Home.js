import React, { Component } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput
} from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";
import SubmitButton from "../components/Button/SubmitButton";
import InputWithButton from "../components/TextInput/InputWithButton";
import Header from "../components/Header/Header";

class Home extends Component {
  handleSignIn = () => {
    console.log("sign in pressed");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <Header />

        <KeyboardAvoidingView behavior="padding">
          <InputWithButton placeholderText="email" />
          <InputWithButton placeholderText="password" secureTextEntry={true} />
        </KeyboardAvoidingView>

        <SubmitButton text="Sign In" onPress={this.handleSignIn} />
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$primaryBlack"
  }
});

export default Home;

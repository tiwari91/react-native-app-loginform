import React, { Component } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";
import SubmitButton from "../components/Button/SubmitButton";

class Home extends Component {
  handleSignIn = () => {
    console.log("sign in pressed");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <SubmitButton text="Sign In" onPress={this.handleSignIn} />
        </KeyboardAvoidingView>
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

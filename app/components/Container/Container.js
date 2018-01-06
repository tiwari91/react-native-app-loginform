import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="blue" barStyle="light-content" />
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={10}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;

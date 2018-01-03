import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = props => (
  <TextInput
    secureTextEntry={props.secureTextEntry}
    placeholder={props.placeholderText}
    style={styles.input}
    placeholderTextColor="#6D6F7C"
    autoCorrect={false}
    autoCapitalize="none"
    keyboardAppearance="dark"
  />
);

InputWithButton.propTypes = {
  placeholderText: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default InputWithButton;

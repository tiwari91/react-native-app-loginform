import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';

const SubmitButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.touchable} onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

SubmitButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default SubmitButton;

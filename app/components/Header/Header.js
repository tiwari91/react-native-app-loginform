import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Welcome to Gaze</Text>
    <View style={styles.headerBorder} />
  </View>
);

export default Header;

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlack: '#333542',

  $white: '#FFFFFF',
  $green: '#0CD38A',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
  $inputColor: '#454754',
  $placeHolderTextColor: '#6D6F7C',
  $headerTextColor: '#F9FDFF',
  $headerBorderColor: '#575B67',
});

export default () => <Home />;

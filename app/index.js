import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlack: "#333542",
  
  $white: "#FFFFFF",
  $green: '#0CD38A',
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434"
});

export default () => <Home />;

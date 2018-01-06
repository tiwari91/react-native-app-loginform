import React from 'react';
import { Image } from 'react-native';

import { SubmitButton } from '../components/Button';
import { InputWithButton } from '../components/TextInput';
import { Header } from '../components/Header';
import { Container } from '../components/Container';

const Home = () => (
  <Container>
    <Header />
    <Image
      source={require('../../assets/planet.png')}
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
      resizeMode="contain"
    />
    <InputWithButton placeholderText="email" />
    <InputWithButton placeholderText="password" secureTextEntry />

    <SubmitButton text="Sign In" onPress={() => null} />
  </Container>
);

export default Home;

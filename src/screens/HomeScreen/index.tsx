import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import background from 'Processo/assets/background/background.png';
import {LoginBox} from './Components/LoginBox';
import {Logo} from './Components/Logo';

export const Home = navigation => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <ScrollView>
          <Logo />
          <LoginBox />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

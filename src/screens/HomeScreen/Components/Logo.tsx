import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from 'Processo/assets/logo/logo.png';

export const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 252,
    height: 88,
    margin: 40,
    alignSelf: 'center',
  },
});

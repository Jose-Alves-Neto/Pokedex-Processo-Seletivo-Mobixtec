import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import logo from 'Processo/assets/logo/logo.png';

export const Logo: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 17,
  },
  logo: {
    height: 41,
    width: 117,
  },
});

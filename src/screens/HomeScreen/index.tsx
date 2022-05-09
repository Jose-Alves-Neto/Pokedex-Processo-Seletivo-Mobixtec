import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import background from 'Processo/assets/background/background.png';
import {LoginBox} from './Components/LoginBox';
import {Logo} from './Components/Logo';

interface Props {
  navigation: {navigate: (arg0: string) => void};
}

export const Home: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <ScrollView>
          <Logo />
          <LoginBox navigation={navigation} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
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

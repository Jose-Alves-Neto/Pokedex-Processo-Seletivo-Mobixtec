import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image, Alert} from 'react-native';
import eye from 'Processo/assets/icons/eye.png';
import {Button, TextInput} from 'react-native-paper';
import {useMutation} from 'react-query';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

interface Props {
  navigation: {navigate: (arg0: string) => void};
}

export const LoginBox: React.FC<Props> = ({navigation}: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  useEffect(() => {
    isLoggedIn(navigation);
  }, []);

  const mutation = useMutation(
    async (verify: {email: string; password: string}) => {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: verify.email,
          password: verify.password,
        }),
      });
      const data = await res.json();
      AsyncStorage.setItem('token', JSON.stringify(data));
      setToken(data);
      return data;
    },
  );

  if (!mutation.isLoading && token) {
    navigation.navigate('PokemonList');
  }

  return (
    <View style={styles.loginBox}>
      <Text style={styles.welcomeText}>Bem-Vindo</Text>
      <Text style={styles.subtext}>Insira seus dados para poder acessar</Text>
      <View style={styles.textContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.placeHolderText}>Email</Text>
          <TextInput
            placeholder="email@email.com"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style={styles.textInput}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={'rgba(0, 0, 0, 0.87)'}
            style={styles.textInput}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={hidePassword}
          />
          <Pressable
            style={styles.visibilityIcon}
            onPressIn={() => {
              setHidePassword(!hidePassword);
            }}>
            <Image source={eye} />
          </Pressable>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          mode="contained"
          color="#2E6EB5"
          onPress={() => mutation.mutate({email, password})}>
          Login
        </Button>
      </View>
    </View>
  );
};

const isLoggedIn = async (navigation: {navigate: (arg0: string) => void}) => {
  let token = await AsyncStorage.getItem('token');
  token = JSON.parse(token || '{}');
  if (token) {
    navigation.navigate('PokemonList');
  }
};

const styles = StyleSheet.create({
  loginBox: {
    padding: 30,
    margin: 35,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  welcomeText: {
    fontFamily: 'Spartan',
    fontWeight: '600',
    fontSize: 24,
    color: 'black',
  },
  subtext: {
    fontFamily: 'Spartan',
    fontWeight: '300',
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
  },
  placeHolderText: {
    fontFamily: 'Spartan',
    fontWeight: '500',
    fontSize: 12,
    paddingLeft: 12,
    color: 'black',
  },
  textContainer: {
    paddingBottom: 20,
  },
  textInputContainer: {
    marginTop: 12,
  },
  textInput: {
    marginBottom: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgba(51, 51, 51, 0.06)',
  },
  visibilityIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 25,
    paddingRight: 20,
    paddingBottom: 25,
    paddingLeft: 20,
  },
  button: {
    borderRadius: 5,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
    marginBottom: 15,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, View} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Home} from './screens/HomeScreen';
import {Details} from './screens/PokemonDetails';
import {PokemonList} from './screens/PokemonList';

const queryClient = new QueryClient();
const stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'rgba(0, 0, 0, 0.87)',
    underlineColor: 'transparent',
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name="PokemonList"
              component={PokemonList}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name={'Details'}
              component={Details}
              options={{
                headerShown: false,
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Drawer, Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Home} from './screens/HomeScreen';
import {Details} from './screens/PokemonDetails';
import {PokemonList} from './screens/PokemonList';

const queryClient = new QueryClient();
const stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name={'Home'}
              component={Details}
              options={{headerShown: false}}
            />
          </stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;

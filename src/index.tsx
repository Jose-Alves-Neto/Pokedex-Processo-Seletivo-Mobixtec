import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './screens/HomeScreen';
import {Details} from './screens/PokemonDetails';
import {PokemonList} from './screens/PokemonList';

const stack = createNativeStackNavigator();

export const Route = () => {
  return (
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
  );
};

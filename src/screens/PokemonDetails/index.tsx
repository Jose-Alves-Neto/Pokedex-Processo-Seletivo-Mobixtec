import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';
import {NameIdDisplay} from './Components/NameIdDisplay';
import {PokemonDisplay} from './Components/PokemonDisplay';
import {TypesDisplay} from './Components/TypesDisplay';
import {DescriptionDisplay} from './Components/DescriptionDisplay';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Sobre} from './screens/Sobre';

const Tab = createBottomTabNavigator();

export const Details = () => {
  const name = 'Charizard';
  const url = `https://pokeapi.co/api/v2/pokemon/6/`;
  const {data: pokemon, isLoading} = useQuery(url, fetchPokemon);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView>
      <View style={{paddingLeft: 25, paddingRight: 25}}>
        <NameIdDisplay name={name} id={pokemon.id} />
        <TypesDisplay types={pokemon.types} />
        <PokemonDisplay types={pokemon.types} sprites={pokemon.sprites} />
      </View>
      <View>
        <DescriptionDisplay pokemon={pokemon} />
      </View>
    </SafeAreaView>
  );
};

const fetchPokemon = async info => {
  const response = await fetch(info.queryKey);
  const data = await response.json();
  return data;
};

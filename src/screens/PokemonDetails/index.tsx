import React from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';
import {NameIdDisplay} from './Components/NameIdDisplay';
import {PokemonDisplay} from './Components/PokemonDisplay';
import {TypesDisplay} from './Components/TypesDisplay';
import {DescriptionDisplay} from './Components/DescriptionDisplay';
import back from 'Processo/assets/icons/Back.png';

export const Details = (nav: any) => {
  const {navigation, route} = nav;
  const {url} = route.params;
  const {data: poke, isLoading} = useQuery(url, fetchPokemon);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView>
      <View style={{paddingLeft: 25, paddingRight: 25}}>
        <GoBackButton navigation={navigation} />
        <NameIdDisplay name={poke.name} id={poke.id} />
        <TypesDisplay types={poke.types} />
        <PokemonDisplay types={poke.types} sprites={poke.sprites} />
      </View>
      <View>
        <DescriptionDisplay pokemon={poke} />
      </View>
    </SafeAreaView>
  );
};

const GoBackButton = ({navigation}: any) => {
  return (
    <Pressable
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={back}
        style={{
          width: 16,
          height: 16,
          marginTop: 25,
          marginBottom: 5,
          padding: 5,
        }}
      />
    </Pressable>
  );
};

const fetchPokemon = async (info: {queryKey: RequestInfo}) => {
  const response = await fetch(info.queryKey);
  const data = await response.json();
  return data;
};

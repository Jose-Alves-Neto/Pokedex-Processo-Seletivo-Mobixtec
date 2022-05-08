import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import getColorByPokemonType from '../../utils/GetColorByPokemonType';
import {NameIdDisplay} from './Components/NameIdDisplay';
import {TypesDisplay} from './Components/TypesDisplay';

export const Details = () => {
  const name = 'Charizard';
  const url = `https://pokeapi.co/api/v2/pokemon/898/`;
  const {data, isLoading} = useQuery(url, fetchPokemon);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{paddingLeft: 25, paddingRight: 25}}>
      <NameIdDisplay name={name} id={data.id} />
      <TypesDisplay types={data.types} />
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{uri: data.sprites.other.home.front_default}}
        />
        <View
          style={Object.assign({}, styles.imageContainer, {
            backgroundColor: getColorByPokemonType(data.types[0].type.name),
          })}>
          <View style={styles.textContainer}></View>
        </View>
      </View>
    </View>
  );
};

const fetchPokemon = async info => {
  const response = await fetch(info.queryKey);
  const data = await response.json();
  return data;
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 190,
    borderRadius: 20,
    zIndex: -1,
  },
  image: {
    position: 'absolute',
    width: 280,
    height: 280,
    top: -100,
  },
  textContainer: {},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f3f3f',
    marginTop: 20,
    textTransform: 'capitalize',
  },
  typeContainer: {
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 40,
  },
});

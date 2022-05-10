import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useQuery} from 'react-query';
import getColorByPokemonType from '../../../utils/GetColorByPokemonType';
import ditto from 'Processo/assets/placeholder/amoeba_placeholder.png';
import LinearGradient from 'react-native-linear-gradient';

export type PokemonJson = {
  pokemon: {
    name: string;
    url: string;
    slot: number;
  };
};

type nav = {
  navigate: (arg0: string, arg1: {url: string}) => void;
};

const PokemonShow: React.FC<PokemonJson> = ({
  pokemon: {name, url, slot = 0},
}) => {
  const nav = useNavigation<nav>();
  const urlPart = url.split('/');
  const index = urlPart[url.split('/').length - 2];
  const {data, isLoading} = useQuery(index, fetchPoke);
  const pokemonImg =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' +
    index +
    '.png';

  if (isLoading) {
    return (
      <View style={styles.card}>
        <Card />
        <Image style={styles.image} source={ditto} />
      </View>
    );
  }

  return (
    <View>
      <Pressable
        style={styles.card}
        onPress={() => {
          nav.navigate('Details', {url: url});
        }}>
        <Card name={name} type={data[0].type.name} />
        <Image style={styles.image} source={{uri: pokemonImg}} />
      </Pressable>
    </View>
  );
};

const Card = ({name = 'Loading...', type = 'normal'}) => {
  return (
    <LinearGradient
      useAngle={true}
      angle={55}
      colors={getColorByPokemonType(type)}
      style={[styles.container]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </LinearGradient>
  );
};

const fetchPoke = async (data: {queryKey: [string]}) => {
  const request = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + data.queryKey + '/',
  );
  const pokemon = await request.json();
  return pokemon.types;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    position: 'absolute',
    width: 110,
    height: 110,
    top: -5,
  },
  container: {
    width: 148,
    height: 96,
    borderRadius: 20,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: '#676767',
    borderRadius: 10,
    marginBottom: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    fontFamily: 'Spartan',
    textTransform: 'capitalize',
  },
});

export const PokemonCard = React.memo(PokemonShow);

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import getColorByPokemonType from '../../../utils/GetColorByPokemonType';

interface PokeDisplayProps {
  types: {type: {name: string}}[];
  sprites: {other: {home: {front_default: string}}};
}

export const PokemonDisplay: React.FC<PokeDisplayProps> = ({
  types,
  sprites,
}: PokeDisplayProps) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={styles.image}
        source={{uri: sprites.other.home.front_default}}
      />
      <View
        style={Object.assign({}, styles.imageContainer, {
          backgroundColor: getColorByPokemonType(types[0].type.name),
        })}>
        <View style={styles.textContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    height: 190,
    borderRadius: 20,
  },
  image: {
    position: 'absolute',
    width: 280,
    height: 280,
    top: -100,
    zIndex: 1,
  },
  textContainer: {},
});

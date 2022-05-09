import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient
        useAngle={true}
        angle={55}
        style={styles.imageContainer}
        colors={getColorByPokemonType(types[0].type.name)}></LinearGradient>
      <Image
        style={styles.image}
        source={{uri: sprites.other.home.front_default}}
      />
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
  },
});

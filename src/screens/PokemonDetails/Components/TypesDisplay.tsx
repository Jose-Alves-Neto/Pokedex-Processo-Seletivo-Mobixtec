import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getColorByPokemonType from '../../../utils/GetColorByPokemonType';

interface Props {
  types: {
    type: {
      name: string;
    };
  }[];
}

export const TypesDisplay: React.FC<Props> = ({types}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {types.map(type => (
        <LinearGradient
          useAngle={true}
          angle={55}
          key={type.type.name}
          colors={getColorByPokemonType(type.type.name)}
          style={[styles.typeContainer]}>
          <View>
            <Text style={styles.typeText}>{type.type.name}</Text>
          </View>
        </LinearGradient>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 40,
    marginBottom: 70,
    marginTop: 10,
    marginRight: 10,
  },
  typeText: {textTransform: 'capitalize', color: 'white'},
});

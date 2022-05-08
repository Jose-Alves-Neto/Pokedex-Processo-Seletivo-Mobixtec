import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import getColorByPokemonType from '../../../utils/GetColorByPokemonType';

export const TypesDisplay = ({types}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {types.map((type, index) => (
        <View
          key={index}
          style={Object.assign({}, styles.typeContainer, {
            backgroundColor: getColorByPokemonType(type.type.name),
          })}>
          <Text style={styles.typeText}>{type.type.name}</Text>
        </View>
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

import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export const Sobre = ({pokemon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bulletPoint}>
        <Text style={styles.info}>Espécie</Text>
        <Text style={styles.bulletPointText}>{pokemon.species.name}</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.info}>Tamanho</Text>
        <Text style={styles.bulletPointText}>
          {pokemon.height / 10 + ' metros'}
        </Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.info}>Habilidades</Text>
        <FlatList
          data={pokemon.abilities}
          keyExtractor={(item, index) => index.toString()}
          style={{flex: 1}}
          numColumns={pokemon.abilities.length}
          renderItem={({item}) => (
            <Text style={styles.abilities}>{item.ability.name}</Text>
          )}
        />
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.info}>Gênero</Text>
        <Text style={styles.bulletPointText}>Fem</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 25,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  bulletPoint: {
    height: 30,
    flexDirection: 'row',
  },
  info: {
    flex: 0.6,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Spartan',
    color: '#9A9A9A',
  },
  bulletPointText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Spartan',
    color: '#9A9A9A',
    alignItems: 'flex-start',
    textTransform: 'capitalize',
  },
  abilities: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Spartan',
    color: '#9A9A9A',
    justifyContent: 'center',
    textTransform: 'capitalize',
    marginRight: 10,
  },
});

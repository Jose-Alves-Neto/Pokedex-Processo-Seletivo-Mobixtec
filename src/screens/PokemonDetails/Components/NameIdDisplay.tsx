import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NameIdDisplay = ({name, id}) => {
  const index = id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View>
        <Text style={styles.id}>{'#' + index.padStart(3, '0')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3f3f3f',
    alignSelf: 'flex-start',
    flex: 1,
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3f3f3f',
    alignSelf: 'flex-end',
    flex: 1,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NameIdDisplay = ({name, id}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.name}>{name}</Text>
      <View>
        <Text style={styles.id}>{id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

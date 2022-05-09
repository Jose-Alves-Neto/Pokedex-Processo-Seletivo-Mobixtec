import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

export const Stats: React.FC = ({pokemon}) => {
  const {stats} = pokemon;
  return (
    <SafeAreaView style={{display: 'flex'}}>
      <FlatList
        data={stats}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.stat.name}</Text>
            <Text style={styles.value}>{item.base_stat}</Text>
          </View>
        )}
        keyExtractor={item => item.stat.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#333',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

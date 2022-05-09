import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import closeFilter from 'Processo/assets/icons/CloseF.png';

export const FilterCard = ({filter, onDelete}: any) => {
  return (
    <FlatList
      data={filter}
      horizontal={true}
      renderItem={item => {
        return renderFilterCard(item, onDelete);
      }}
      keyExtractor={item => item}
    />
  );
};

const renderFilterCard = ({item}: any, onDelete: Function) => {
  return (
    <View style={styles.filter}>
      <Text style={styles.filterText}>{item}</Text>

      <Pressable
        style={{alignSelf: 'center', padding: 10}}
        onPress={() => {
          onDelete(item);
        }}>
        <Image source={closeFilter} style={{width: 16, height: 16}} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
  },
  filterText: {
    fontFamily: 'Spartan',
    fontWeight: '400',
    textTransform: 'capitalize',
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 8,
  },
});

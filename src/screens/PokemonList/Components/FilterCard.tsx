import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import closeFilter from 'Processo/assets/icons/CloseF.png';

interface filterCardProps {
  filter: string;
  onDelete: (filter: string) => void;
}

export const FilterCard: React.FC<filterCardProps> = ({filter, onDelete}) => {
  if (filter.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.filterText}>{filter}</Text>
        <Pressable
          style={{alignSelf: 'center', padding: 10}}
          onPress={() => {
            onDelete(filter);
          }}>
          <Image source={closeFilter} style={{width: 16, height: 16}} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  filter: {
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
    alignSelf: 'center',
    marginBottom: 5,
    marginHorizontal: 8,
  },
});

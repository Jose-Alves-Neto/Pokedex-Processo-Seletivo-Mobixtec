import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import vector from 'Processo/assets/icons/Vector.png';
import {FilterModal} from './FilterModal';

export const PokeSearch = drawerNavigator => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [visibleFilters, setVisibleFilters] = React.useState(false);

  return (
    <View
      style={{
        marginTop: 24,
        flexDirection: 'row',
      }}>
      <Searchbar
        style={{
          flex: 1,
          marginLeft: 25,
          borderRadius: 30,
          backgroundColor: '#E5E5E5',
          marginBottom: 10,
        }}
        placeholder="Buscar"
        placeholderTextColor={'#838282'}
        value={searchQuery}
        onChangeText={onChangeSearch}
      />

      <Button
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setVisibleFilters(!visibleFilters)}>
        <Image source={vector} style={{height: 16, width: 18}} />
      </Button>
      <FilterModal
        visible={visibleFilters}
        onClose={() => setVisibleFilters(false)}
        children={undefined}
      />
    </View>
  );
};

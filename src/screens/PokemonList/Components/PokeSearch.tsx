import React from 'react';
import {Image, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import vector from 'Processo/assets/icons/Vector.png';
import {FilterModal} from './FilterModal';
import {FilterCard} from './FilterCard';

export const PokeSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visibleFilters, setVisibleFilters] = React.useState(false);
  const [filterValues, setFilterValues]: [string[], Function] = React.useState(
    [],
  );

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const onClose = () => setVisibleFilters(false);
  const onApply = (value: string[]) => {
    setFilterValues(value);
    setVisibleFilters(false);
  };
  const onDelete = (value: string) => {
    const newValues = filterValues.filter(item => item !== value);
    setFilterValues(newValues);
  };

  return (
    <View>
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
          onClose={onClose}
          onApply={onApply}
          initialValue={filterValues}
        />
      </View>
      <FilterCard filter={filterValues} onDelete={onDelete} />
    </View>
  );
};

import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import vector from 'Processo/assets/icons/Vector.png';
import {FilterModal} from './FilterModal';
import {FilterCard} from './FilterCard';
import debounce from 'lodash.debounce';

interface pokeSearchProps {
  initialValue: string;
  onSearch: (text: string) => void;
  onApply: (filter: string) => void;
}

export const PokeSearch: React.FC<pokeSearchProps> = ({
  initialValue,
  onSearch,
  onApply,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visibleFilters, setVisibleFilters] = React.useState(false);

  const onClose = (): void => setVisibleFilters(false);
  const applyHandler = (value: string): void => {
    onApply(value);
    setVisibleFilters(false);
  };
  const onDelete = (value: string): void => {
    if (value !== 'all') {
      applyHandler('all');
    }
  };

  const handleSearch = (query: string): void => {
    debouncedSearch(query);
    setSearchQuery(query);
  };

  const debouncedSearch = React.useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [],
  );

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
          onChangeText={handleSearch}
        />
        <Pressable
          style={{
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setVisibleFilters(!visibleFilters)}>
          <Image source={vector} style={{height: 20, width: 20}} />
        </Pressable>
        <FilterModal
          visible={visibleFilters}
          onClose={onClose}
          onApply={onApply}
          initialValue={initialValue}
        />
      </View>
      <FilterCard filter={initialValue} onDelete={onDelete} />
    </View>
  );
};

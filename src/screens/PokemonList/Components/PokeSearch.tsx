import React from 'react';
import {Image, View} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import vector from 'Processo/assets/icons/Vector.png';
import {FilterModal} from './FilterModal';
import {FilterCard} from './FilterCard';

interface pokeSearchProps {
  initialValue: string;
  onApply: (filter: string) => void;
}

export const PokeSearch: React.FC<pokeSearchProps> = ({
  initialValue,
  onApply,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visibleFilters, setVisibleFilters] = React.useState(false);

  const onChangeSearch = (query: React.SetStateAction<string>): void =>
    setSearchQuery(query);
  const onClose = (): void => setVisibleFilters(false);
  const applyHandler = (value: string): void => {
    onApply(value);
    setVisibleFilters(false);
  };
  const onDelete = (value: string): void => {
    onApply('All');
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
          initialValue={initialValue}
        />
      </View>
      <FilterCard filter={initialValue} onDelete={onDelete} />
    </View>
  );
};

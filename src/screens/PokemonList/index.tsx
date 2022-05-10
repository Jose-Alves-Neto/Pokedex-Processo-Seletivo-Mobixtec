import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Query, QueryFunction, useInfiniteQuery, useQuery} from 'react-query';
import getIdByType from '../../utils/GetIdByType';
import {Logo} from './Components/Logo';
import {PokemonCard} from './Components/PokemonCard';
import {PokeSearch} from './Components/PokeSearch';

interface Page {
  response: {
    name: string;
    count: number;
    next: string;
    previous: string;
    results: {
      name: string;
      url: string;
    };
  }[];
  next: string;
}

export const PokemonList: React.FC<Page> = () => {
  const [search, setSearch] = React.useState('');
  const [filterValue, setFilterValue]: [string, Function] =
    React.useState('all');
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery<Page>(['pokemon', filterValue], fetchPokemon, {
      getNextPageParam: lastPage => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }
        return lastPage;
      },
    });
  const {
    data: pokeType,
    refetch,
    isLoading: isLoadingType,
  } = useQuery(['pokeType', filterValue], fetchType);

  const onSearch = (text: string) => setSearch(text);

  const onApply = (value: string) => {
    refetch();
    setFilterValue(value);
  };

  if (isLoading || isLoadingType) {
    return <Text>Loading...</Text>;
  }

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderItem = ({item}: any) => {
    return <PokemonCard pokemon={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Logo />
      <PokeSearch
        initialValue={filterValue}
        onSearch={onSearch}
        onApply={onApply}
      />
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.4}
          keyExtractor={item => item.name}
          data={
            filterValue == 'all'
              ? data?.pages
                  .map(page => page.response)
                  .map(results =>
                    results.filter(item =>
                      item.name.toLowerCase().startsWith(search.toLowerCase()),
                    ),
                  )
                  .flat()
              : pokeType
                  .map((res: pokeByType) => res.pokemon)
                  .filter((item: {name: string}) => {
                    return item.name
                      .toLowerCase()
                      .startsWith(search.toLowerCase());
                  })
          }
          renderItem={renderItem}
          contentContainerStyle={styles.contenteList}
        />
      </View>
      {isFetchingNextPage && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

interface pokeByType {
  pokemon: {
    name: string;
    url: string;
    slot: number;
  }[];
}

const fetchType = async (key: {queryKey: string[]}) => {
  if (getIdByType(key.queryKey[1]) == '0') {
    return null;
  }
  const url = `https://pokeapi.co/api/v2/type/${getIdByType(key.queryKey[1])}/`;
  const response = await fetch(url);
  const data = await response.json();
  return data.pokemon;
};

const fetchPokemon: QueryFunction<Page> = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
}) => {
  const request = await fetch(pageParam);
  const {results, next} = await request.json();
  return {response: results, next: next};
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contenteList: {
    paddingBottom: 200,
    justifyContent: 'space-evenly',
  },
  list: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },
});

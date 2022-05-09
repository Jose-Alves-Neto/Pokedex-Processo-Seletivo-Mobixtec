import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useInfiniteQuery} from 'react-query';
import {Logo} from './Components/Logo';
import {PokemonCard} from './Components/PokemonShow';
import {PokeSearch} from './Components/PokeSearch';

export const PokemonList: React.FC<any> = () => {
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('pokemon', fetchPokemon, {
      getNextPageParam: lastPage => {
        if (lastPage.next !== null) {
          return lastPage.next;
        }

        return lastPage;
      },
    });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Logo />
      <PokeSearch />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <FlatList
          style={{paddingLeft: 40, paddingRight: 40, paddingBottom: 20}}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.4}
          keyExtractor={item => item.name}
          data={data?.pages.map(page => page.response).flat()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: 200,
            justifyContent: 'space-evenly',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const renderItem = ({item}: any) => {
  return <PokemonCard pokemon={item} />;
};

const fetchPokemon = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  const request = await fetch(pageParam);
  const {results, next} = await request.json();
  return {response: results, next: next};
};

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {Fragment, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useInfiniteQuery} from 'react-query';
import {FilterModal} from './Components/FilterModal';
import {Logo} from './Components/Logo';
import {PokemonCard} from './Components/PokemonShow';
import {PokeSearch} from './Components/SearchBar';

export const PokemonList: React.FC<any> = (
  stackNavigation,
  drawerNavigation,
) => {
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('pokemon', fetchPokemon, {
      getNextPageParam: lastPage => lastPage.nextPage,
    });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Logo />
      <PokeSearch />
      <ScrollView
        style={{marginLeft: 30, marginRight: 30}}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent) && hasNextPage) {
            fetchNextPage();
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {/* Change for flatlist to save memory */}
          {data?.pages.map((group, i) => {
            return (
              <Fragment key={i}>
                {group.response.map(data => (
                  <PokemonCard key={data.name} pokemon={data} />
                ))}
              </Fragment>
            );
          })}
        </View>
        <View style={{padding: 30, alignItems: 'center'}}>
          {isFetchingNextPage ? (
            <Text style={{color: 'black'}}>Loading...</Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - 30;
};

const fetchPokemon = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
  const request = await fetch(pageParam);
  const {results, next} = await request.json();
  return {response: results, nextPage: next};
};

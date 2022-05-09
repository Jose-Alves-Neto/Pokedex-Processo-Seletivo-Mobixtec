import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';

export const Evo = () => {
  return (
    <View>
      <Text>Evolução</Text>
    </View>
  );
};

const fetchSpecies = async (info: {queryKey: RequestInfo}) => {
  const response = await fetch(info.queryKey);
  const species = await response.json();
  return species;
};

const fetchEvo = async (info: {queryKey: RequestInfo}) => {
  const response = await fetch(info.queryKey);
  const evo = await response.json();
  const evoChain = evo.chain;
};

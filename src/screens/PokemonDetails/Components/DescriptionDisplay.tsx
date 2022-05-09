import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Evo} from '../screens/Evo';
import {Sobre} from '../screens/Sobre';
import {Stats} from '../screens/Stats';

export const DescriptionDisplay = ({pokemon}: any) => {
  const [buttonPressed, setButtonPressed] = React.useState('1');

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
        }}>
        <Button
          mode={'text'}
          style={
            buttonPressed == '1' ? styles.buttonPressed : styles.buttonUnpressed
          }
          labelStyle={
            buttonPressed == '1'
              ? styles.buttonTextPressed
              : styles.buttonTextUnpressed
          }
          onPress={() => setButtonPressed('1')}>
          Sobre
        </Button>
        <Button
          mode={'text'}
          style={
            buttonPressed == '2' ? styles.buttonPressed : styles.buttonUnpressed
          }
          labelStyle={
            buttonPressed == '2'
              ? styles.buttonTextPressed
              : styles.buttonTextUnpressed
          }
          onPress={() => setButtonPressed('2')}>
          Status
        </Button>
        <Button
          mode={'text'}
          style={
            buttonPressed == '3' ? styles.buttonPressed : styles.buttonUnpressed
          }
          labelStyle={
            buttonPressed == '3'
              ? styles.buttonTextPressed
              : styles.buttonTextUnpressed
          }
          onPress={() => {
            setButtonPressed('3');
          }}>
          Evolução
        </Button>
      </View>
      <View style={styles.lineSeparator} />
      {renderDescription(pokemon, buttonPressed)}
    </View>
  );
};

const renderDescription = (pokemon: any, buttonPressed: string) => {
  if (buttonPressed == '1') {
    return <Sobre pokemon={pokemon} />;
  } else if (buttonPressed == '2') {
    return <Stats pokemon={pokemon} />;
  } else if (buttonPressed == '3') {
    return <Evo />;
  }
};

const styles = StyleSheet.create({
  buttonUnpressed: {
    flex: 1,
    fontSize: 14,
  },
  buttonPressed: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#FF1D1D',
  },
  buttonTextUnpressed: {
    fontSize: 14,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    color: '#3f3f3f',
    letterSpacing: 0,
  },
  buttonTextPressed: {
    fontSize: 14,
    fontFamily: 'Spartan',
    alignSelf: 'center',
    color: '#5E5E5E',
    fontWeight: 'bold',
  },
  lineSeparator: {
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  },
  description: {},
});

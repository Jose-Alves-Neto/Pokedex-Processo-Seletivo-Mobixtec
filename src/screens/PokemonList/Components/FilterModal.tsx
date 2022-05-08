import React from 'react';
import {Modal, View, StyleSheet, Text, Image} from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import close from 'Processo/assets/icons/Close.png';

const filterValues = [
  {label: 'Todos', value: 'all'},
  {label: 'Fire', value: 'fire'},
  {label: 'Water', value: 'water'},
  {label: 'Grass', value: 'grass'},
  {label: 'Electric', value: 'electric'},
  {label: 'Ice', value: 'ice'},
  {label: 'Fighting', value: 'fighting'},
  {label: 'Poison', value: 'poison'},
  {label: 'Ground', value: 'ground'},
  {label: 'Flying', value: 'flying'},
  {label: 'Psychic', value: 'psychic'},
  {label: 'Bug', value: 'bug'},
  {label: 'Rock', value: 'rock'},
  {label: 'Ghost', value: 'ghost'},
  {label: 'Dragon', value: 'dragon'},
  {label: 'Dark', value: 'dark'},
  {label: 'Steel', value: 'steel'},
  {label: 'Fairy', value: 'fairy'},
];

export const FilterModal = ({visible, onClose, children}) => {
  const [checked, setChecked] = React.useState('all');
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          {children}
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: '700'}}>
              Filtros
            </Text>
            <Button mode="text" onPress={onClose} compact={true}>
              <Text
                style={{
                  textTransform: 'none',
                  color: '#4A7DFF',
                  textDecorationLine: 'underline',
                  letterSpacing: 0.2,
                }}>
                Limpar filtros
              </Text>
            </Button>
            <Button
              style={{flex: 1}}
              mode="text"
              onPress={onClose}
              compact={true}>
              <Image source={close} style={{width: 14, height: 14}} />
            </Button>
          </View>
          <View>
            <Text style={{color: '#3F3F3F', marginTop: 25, fontSize: 16}}>
              Tipo
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    height: '100%',
    width: '70%',
    maxWidth: 400,
  },
});

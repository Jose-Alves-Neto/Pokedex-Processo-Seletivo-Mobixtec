import React from 'react';
import {Modal, View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {RadioButton} from './RadioButtonCustom';
import close from 'Processo/assets/icons/Close.png';

const filterValues = [
  {label: '0', value: 'all'},
  {label: '1', value: 'normal'},
  {label: '2', value: 'fighting'},
  {label: '3', value: 'flying'},
  {label: '4', value: 'poison'},
  {label: '5', value: 'ground'},
  {label: '6', value: 'rock'},
  {label: '7', value: 'bug'},
  {label: '8', value: 'ghost'},
  {label: '9', value: 'steel'},
  {label: '10', value: 'fire'},
  {label: '11', value: 'water'},
  {label: '12', value: 'grass'},
  {label: '13', value: 'electric'},
  {label: '14', value: 'psychic'},
  {label: '15', value: 'ice'},
  {label: '16', value: 'dragon'},
  {label: '17', value: 'dark'},
  {label: '18', value: 'fairy'},
];

interface Props {
  visible: boolean;
  onClose: () => void;
  initialValue: string;
  onApply: (filter: string) => void;
}

export const FilterModal: React.FC<Props> = ({
  visible,
  onClose,
  initialValue,
  onApply,
}) => {
  const applyHandler = (filter: string = 'all'): void => {
    onApply(filter);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: '700'}}>
              Filtro
            </Text>
            <Button mode="text" onPress={() => applyHandler()} compact={true}>
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
            <Text style={{color: '#3F3F3F', marginTop: 0, fontSize: 16}}>
              Tipo
            </Text>

            <RadioButton
              data={filterValues}
              initialValue={initialValue}
              onApply={applyHandler}
            />
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

import React from 'react';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export const RadioButton = ({data, initialValue, onApply}: any) => {
  const [filterSelection, setFilterSelection] = React.useState(initialValue);

  const selectHandler = (value: string): void => {
    if (filterSelection.includes(value)) {
      setFilterSelection(
        filterSelection.filter((item: string) => item !== value),
      );
    } else {
      setFilterSelection([...filterSelection, value]);
    }
  };

  const applyHandler = () => {
    onApply(filterSelection);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {data.map(item => {
          return (
            <Pressable
              key={item.value}
              style={selectionContainerStyle(filterSelection, item.value)}
              onPress={() => selectHandler(item.value)}>
              <Text style={selectionTextStyle(filterSelection, item.value)}>
                {item.value}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View style={{paddingTop: 10}}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => {
            onApply(filterSelection);
          }}
          compact={true}>
          Aplicar
        </Button>
      </View>
    </View>
  );
};

const selectionContainerStyle = (filterSelection: string[], value: string) => {
  if (filterSelection.includes(value)) {
    return [styles.container, styles.containerSelected];
  }
  return [styles.container, styles.containerUnselected];
};

const selectionTextStyle = (filterSelection: string[], value: string) => {
  if (filterSelection.includes(value)) {
    return [styles.text, styles.textSelected];
  }
  return [styles.text, styles.textUnselected];
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
  containerUnselected: {
    backgroundColor: '#D8D8D8',
  },
  containerSelected: {
    backgroundColor: '#2E6EB5',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Spartan',
    fontWeight: '500',
    width: 80,
    height: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textSelected: {
    fontSize: 14,
    color: '#fff',
  },
  textUnselected: {
    color: '#6B6060',
  },
  button: {
    backgroundColor: '#2E6EB5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Spartan',
    fontWeight: '600',
  },
});

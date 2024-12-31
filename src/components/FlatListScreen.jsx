import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' },
  { id: '6', name: 'Item 6' },
  { id: '7', name: 'Item 7' },
  { id: '8', name: 'Item 8' },
  { id: '9', name: 'Item 9' },
];

const FlatListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} contentContainerStyle={styles.itemContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#e1e1e1',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#663130',
    textAlign : 'center',
    borderRadius: 10,
    padding: 20,
  },
});


export default FlatListScreen;

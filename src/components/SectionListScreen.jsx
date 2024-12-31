import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const listItems = [
  {
    title: 'Fruits',
    data: [
      { id: '1', name: 'apple' },
      { id: '2', name: 'mango' },
      { id: '3', name: 'orange' },
    ],
  },
  {
    title: 'Dairy',
    data: [
      { id: '1', name: 'Milk' },
      { id: '2', name: 'Cheese' },
      { id: '3', name: 'Butter' },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: '1', name: 'Carrot' },
      { id: '2', name: 'Potato' },
      { id: '3', name: 'Broccoli' },
      { id: '4', name: 'Ah Tammatar Bade Majedar' },
    ],
  },
];

const SectionListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8', // Light gray background for the entire screen
    padding: 10,
  },
  sectionHeader: {
    backgroundColor: '#663130', // Light gray for section header
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff', // Dark gray text
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff', // White background for items
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray separator line
  },
  itemText: {
    fontSize: 14,
    color: '#000000', // Medium gray text
  },
});

export default SectionListScreen;

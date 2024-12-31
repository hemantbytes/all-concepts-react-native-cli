import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const data = [
    { id: 1, title: 'Item 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Item 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Item 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Item 4', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Item 5', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Item 6', image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Item 7', image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Item 8', image: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Item 9', image: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Item 10', image: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Item 11', image: 'https://via.placeholder.com/150' },
    { id: 12, title: 'Item 12', image: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Item 13', image: 'https://via.placeholder.com/150' },
    { id: 14, title: 'Item 14', image: 'https://via.placeholder.com/150' },
];

const Grid = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Grid</Text>
            <ScrollView contentContainerStyle={styles.grid}>
                {data.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 200, 
    },
    card: {
        width: '48%',
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Grid;

/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';

const ImageComponentExample = () => {
    const localImage = require('../images/React.png');
    const remoteImage = {uri : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'};
    const backgroundImage = { uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'};
  return (
    <ImageBackground
    source={backgroundImage}
    style={styles.background}
    resizeMode="cover"
    >
    <View style={styles.content}>
        <Text style={styles.text}>React Native!</Text>
        <Image
            source={localImage}
            style={styles.image}
            resizeMode="cover"
        />
        <Image
            source={remoteImage}
            style={styles.image}
            resizeMode="cover"
        />
    </View>

    </ImageBackground>
  );
};

export default ImageComponentExample;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        color: 'black',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
});
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressAbleComponent = () => {
    const handlePress = ()=>{
        console.log('On pressed');
    };
    const handlePressIn = ()=>{
        console.log('Press In');
    };
    const handlePressOut = ()=>{
        console.log('Press Out');
    };
     const handleLongPress = ()=>{
        console.log('Press Long');
    };
  return (
    <View style={styles.container}>
      <Pressable  style={styles.button}
      onPress={handlePress} 
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    onLongPress={handleLongPress}
    delayLongPress={5000}>
       <Text style={styles.buttonText}>Press Me</Text> 
      </Pressable>
    </View>
  );
};

export default PressAbleComponent;

const styles = StyleSheet.create({  
    container: {
        height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
      },
      button : {
          paddingVertical: 12,
          paddingHorizontal: 20,
          backgroundColor: '#3858f6',
          borderRadius: 10,
          marginBottom: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },

});
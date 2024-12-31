import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { getActionFromState, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  }
  else if (routeName === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }
  else if (routeName === 'Settings') {
    iconName = focused ? 'settings' : 'settings-outline';
  }
  return <Icon color={color} size={size} name={iconName} />;
};

const HomeScreen = () => (
   <View style={styles.container}>
     <Text styles={styles.text}> Home Screen  </Text>
   </View>
);
const ProfileScreen = () => (
  <View style={styles.container}>
    <Text styles={styles.text}> Profile Screen  </Text>
  </View>
);
const SettingsScreen = () => (
  <View style={styles.container}>
    <Text styles={styles.text}> Setting Screen  </Text>
  </View>
);



const AppBottomTab = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator
     screenOptions={ ({route}) => ({
          tabBarIcon: ({ focused , color , size }) => 
            getTabBarIcon (route.name, focused, color, size),
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor : '#333',
          tabBarStyle: {
            paddingBottom : 5,
            height : 60,
          },
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default AppBottomTab;

const styles = StyleSheet.create({
   container :{
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor : '#f8f9fa',
   },
   text :{
    fontSize : 46,
    color : '#343a40',
    fontWeight : 'bold',
   },

})

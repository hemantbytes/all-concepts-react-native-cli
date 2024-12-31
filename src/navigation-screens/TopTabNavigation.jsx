import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ChatScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Chat Screen</Text>
  </View>
);

const StatusScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Status Screen</Text>
  </View>
);

const CallsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Calls Screen</Text>
  </View>
);

const TopTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50', // Active tab color
          tabBarInactiveTintColor: '#B0BEC5', // Inactive tab color
          tabBarStyle: styles.tabBar, // Apply internal style to tab bar
          tabBarIndicatorStyle: styles.tabBarIndicator, // Apply internal style to the tab indicator
          tabBarLabelStyle: styles.tabBarLabel, // Apply internal style to tab labels
        }}
      >
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Internal styles
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF', // Clean white background for the tab bar
    shadowOpacity: 0.1, // Light shadow for a floating effect
    elevation: 5, // Add some elevation for a modern feel
  },
  tabBarIndicator: {
    backgroundColor: '#4CAF50', // Active indicator color
    height: 3, // Sleek indicator
  },
  tabBarLabel: {
    fontSize: 16, // Modern font size
    fontWeight: '600', // Bold text for readability
    textTransform: 'capitalize', // Capitalize tab labels
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
    color: '#333', // Dark text for readability
  },
});

export default TopTabNavigation;

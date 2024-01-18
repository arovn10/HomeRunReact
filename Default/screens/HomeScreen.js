import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components
import MapScreen from './MapScreen';   // Replace with your Map component
import LoginScreen from './LoginScreen';  // Replace with your Login component
import HomePageScreen from './HomePageScreen';  // Replace with your Home Page component

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Map') {
                            iconName = focused ? 'ios-map' : 'ios-map-outline';
                        } else if (route.name === 'Login') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomePageScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default HomeScreen;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Make sure to install this package

// Import your screens
import MapScreen from './MapScreen';
import TenantDashboardScreen from './TenantDashboardScreen';
// ... other imports for MaintenanceRequestsScreen, AccountingScreen, ChatScreen, ApplicationsScreen, LogoutScreen

const Tab = createBottomTabNavigator();

const StudentDashboardScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        // Select the appropriate icon based on the screen
                        if (route.name === 'Map') {
                            iconName = focused ? 'map' : 'map-outline';
                        } else if (route.name === 'Dashboard') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        // ... other icons for Maintenance, Accounting, Chat, Applications, Logout

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Dashboard" component={TenantDashboardScreen} />
                {/* Other tabs */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default StudentDashboardScreen;

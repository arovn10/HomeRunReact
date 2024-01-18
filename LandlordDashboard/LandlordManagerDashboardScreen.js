import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

// Import your screen components
import DashboardScreen from './DashboardScreen';
import ContactsScreen from './ContactsScreen';
import LandlordAccountingScreen from './LandlordAccountingScreen';
import ChatsScreen from './ChatsScreen';
import PropertiesScreen from './PropertiesScreen';
import LandlordApplicationsScreen from './LandlordApplicationsScreen';
import LandlordMaintenanceRequestsScreen from './LandlordMaintenanceRequestsScreen';
import AddPropertyScreen from './AddPropertyScreen';
import LogoutScreen from './LogoutScreen';

const Tab = createBottomTabNavigator();

const LandlordManagerDashboardScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Dashboard':
                            iconName = focused ? 'house' : 'house-outline';
                            break;
                        case 'Contacts':
                            iconName = focused ? 'person-3' : 'person-3-outline';
                            break;
                        // Define other icons for Accounting, Chats, Properties, etc.
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            {/* Define other tabs for Accounting, Chats, Properties, etc. */}
        </Tab.Navigator>
    );
};

export default LandlordManagerDashboardScreen;

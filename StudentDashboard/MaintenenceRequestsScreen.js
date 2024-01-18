import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaintenanceRequestsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Maintenance Requests</Text>
            {/* Add your UI components for maintenance requests here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // White background
    },
    // Add more styles as needed
});

export default MaintenanceRequestsScreen;

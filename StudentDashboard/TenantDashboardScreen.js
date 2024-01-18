import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TenantDashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Tenant Dashboard</Text>
            {/* Add your UI components for the tenant dashboard here */}
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

export default TenantDashboardScreen;

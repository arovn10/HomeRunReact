import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandlordApplicationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Landlord Applications</Text>
            {/* Add your UI components for displaying and managing landlord applications here */}
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

export default LandlordApplicationsScreen;

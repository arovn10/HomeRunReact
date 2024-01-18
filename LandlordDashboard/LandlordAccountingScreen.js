import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandlordAccountingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Landlord Accounting</Text>
            {/* Add your UI components for accounting functionalities here */}
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

export default LandlordAccountingScreen;

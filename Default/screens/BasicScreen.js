import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BasicScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to BasicScreen</Text>
            {/* Additional UI elements go here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Default background color
    },
    // Add more styles as needed
});

export default BasicScreen;

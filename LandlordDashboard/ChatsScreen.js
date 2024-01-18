import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Chats</Text>
            {/* Add your UI components for chats here */}
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

export default ChatsScreen;

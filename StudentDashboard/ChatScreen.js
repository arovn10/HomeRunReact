import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
            {/* Add your UI components for the chat feature here */}
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

export default ChatScreen;

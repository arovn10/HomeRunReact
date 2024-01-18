import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AdminLoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginButtonTapped = () => {
        // Implement the login logic for admins
        console.log('Username:', username, 'Password:', password);
        // Add your login logic here
    };

    return (
        <View style={styles.container}>
            {/* Username TextField */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            {/* Password TextField */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Login Button */}
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={loginButtonTapped} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        width: 250,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginTop: 20,
        width: 250,
    },
    // Add more styles as needed
});

export default AdminLoginScreen;

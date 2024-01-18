import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure you have @react-navigation/native installed

const LandlordLoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const loginButtonTapped = () => {
        // Replace the following logic with your actual authentication logic
        if (username === "Landlord" && password === "password") {
            // Dummy login success
            console.log('Login successful');
            navigation.navigate('LandlordDashboard'); // Navigate to the Landlord Dashboard
        } else {
            // Handle invalid credentials
            Alert.alert('Invalid Credentials', 'Please check your username and password.');
        }
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
            <Button title="Login" onPress={loginButtonTapped} />
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
    // Add more styles as needed
});

export default LandlordLoginScreen;

import React from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
    const logoutUser = () => {
        // Handle the logout process here
        // This typically involves navigating back to the login screen
        navigation.navigate('Home'); // Replace 'Home' with your login screen name
    };

    const presentLogoutConfirmation = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => logoutUser()
                }
            ]
        );
    };

    React.useEffect(() => {
        presentLogoutConfirmation();
    }, []);

    return (
        <View style={styles.container}>
            {/* Additional UI elements if needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Custom white color
    },
    // Add more styles as needed
});

export default LogoutScreen;

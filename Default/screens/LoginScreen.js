import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LoginScreen = ({ navigation }) => {
    const [selectedUserType, setSelectedUserType] = useState("Student");
    const userTypes = ["Student", "Landlord", "Manager"];

    const goButtonTapped = () => {
        // Logic to navigate to specific login page based on selected user type
        switch (selectedUserType) {
            case "Student":
                navigation.navigate('StudentLogin');
                break;
            case "Landlord":
                navigation.navigate('LandlordLogin');
                break;
            case "Manager":
                navigation.navigate('ManagerLogin');
                break;
            // Add more cases as needed
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Picker
                selectedValue={selectedUserType}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedUserType(itemValue)
                }>
                {userTypes.map((userType, index) => (
                    <Picker.Item key={index} label={userType} value={userType} />
                ))}
            </Picker>
            <Button title="Go" onPress={goButtonTapped} />
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
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    // Add more styles as needed
});

export default LoginScreen;

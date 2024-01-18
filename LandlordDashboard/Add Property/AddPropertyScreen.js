import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';

const AddPropertyScreen = () => {
    // State for property details
    const [property, setProperty] = useState({
        name: '',
        address: '',
        description: '',
        // Add other relevant fields
    });

    const handleSubmit = () => {
        // Implement your submission logic here
        console.log('Property submitted:', property);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Add New Property</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={property.name}
                    onChangeText={(text) => setProperty({ ...property, name: text })}
                />
                {/* Repeat for other fields like address, description, etc. */}
                <Button title="Submit Property" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        borderRadius: 4,
    },
    // Add more styles as needed
});

export default AddPropertyScreen;

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const HomePageScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentView}>
                {/* App Name Label */}
                <Text style={styles.appNameLabel}>HomeRun</Text>

                {/* Slogan Label */}
                <Text style={styles.sloganLabel}>Your one-stop destination for student housing.</Text>

                {/* Additional content like 'About' section and 'Newsfeed' goes here */}
                {/* ... */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Replace with custom color if needed
    },
    contentView: {
        alignItems: 'center',
        padding: 20,
    },
    appNameLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4E7B75', // Aegean Teal color
        textAlign: 'center',
        marginTop: 20,
    },
    sloganLabel: {
        fontSize: 18,
        color: '#4E7B75', // Aegean Teal color
        textAlign: 'center',
        marginTop: 10,
    },
    // Add styles for additional content as needed
});

export default HomePageScreen;

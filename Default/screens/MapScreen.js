import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);

    // Tulane University data
    const tulaneUniversity = {
        name: "Tulane University",
        coordinate: {
            latitude: 29.9407,
            longitude: -90.1209,
        },
        associatedAddresses: [
            "7700 Burthe St, New Orleans LA 70118",
            "7608 Zimpel St, New Orleans LA 70118",
            // ... other addresses ...
        ],
    };

    const onMapPress = (e) => {
        setMarkers([...markers, {
            coordinate: e.nativeEvent.coordinate,
            key: markers.length
        }]);
    };

    const centerMapOnTulaneUniversity = () => {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: tulaneUniversity.coordinate.latitude,
                longitude: tulaneUniversity.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }, 1000);
        }
    };

    // Add more functions for zooming in/out and selecting school as needed

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: tulaneUniversity.coordinate.latitude,
                    longitude: tulaneUniversity.coordinate.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={onMapPress}
            >
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker.coordinate} />
                ))}
            </MapView>

            <TouchableOpacity style={styles.button} onPress={centerMapOnTulaneUniversity}>
                <Text>Center on Tulane University</Text>
            </TouchableOpacity>
            {/* Add more buttons for other functionalities */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 10,
    },
});

export default MapScreen;

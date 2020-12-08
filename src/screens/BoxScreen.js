import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-start'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'center'
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        position: 'absolute',
        alignSelf: 'flex-end'
    },
});

export default BoxScreen;

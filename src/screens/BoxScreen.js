import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <Text>BoxScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red'
    },
});

export default BoxScreen;

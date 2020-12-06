import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text style={styles.text}>TextScreen</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>
                {
                    name.length < 5
                        ? 'your password must be at least 5 chars'
                        : name
                }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;

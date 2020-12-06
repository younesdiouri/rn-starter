import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            onPress={() => navigation.navigate('Counter')}
            title="Counter demo"
        />
        <Button
            onPress={() => navigation.navigate('Text')}
            title="Text demo"
        />
        <Button
            onPress={() => navigation.navigate('Box')}
            title="Box demo"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const INCREMENT_VALUE = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_increase':
      return {...state, count: state.count + action.payload};
    case 'change_decrease':
      return {...state, count: state.count - action.payload};
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const { count } = state;
  return (
      <View>
        <Button
            title="Increase"
            onPress={() => dispatch({ type: 'change_increase', payload: INCREMENT_VALUE})}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({ type: 'change_decrease', payload: INCREMENT_VALUE})}
        />
        <Text>Current Count : {count}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;

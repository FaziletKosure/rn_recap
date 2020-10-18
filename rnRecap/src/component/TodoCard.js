import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {todo_card} from '../styles';
const TodoCard = (props) => {
  return (
    <View style={todo_card.container}>
      <Text style={todo_card.container}>{props.data.todo}</Text>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});

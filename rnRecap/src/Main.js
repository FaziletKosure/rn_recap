import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {main} from './styles';
import TodoInput from './component/TodoInput';
/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */
const Main = () => {
  const [list, setList] = useState([]);
  function addTodo(text) {
    // console.log(text);
    const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };
    // console.log(element);
    const newArray = [...list];
    newArray.push(element);
    setList(newArray);
  }
  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>0</Text>
        </View>
        <FlatList data={[]} renderItem={() => null} />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </View>
    </SafeAreaView>
  );
};
export default Main;

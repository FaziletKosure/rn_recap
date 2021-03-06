import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {main} from './styles';
import TodoInput from './component/TodoInput';
import TodoCard from './component/TodoCard';
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
    const newArray = [...list, element];

    setList(newArray);
  }
  const renderTodo = ({item}) => (
    <TodoCard data={item} onDone={(id) => doneTodo(id)} />
  );
  function doneTodo(todoId) {
    //   alert('Todo id:' + todoId);
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == todoId);
    newArray[todoIndex].isDone = !newArray;
  }
  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>{list.length}</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>Nothing to do...</Text>
          )}
        />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </View>
    </SafeAreaView>
  );
};
export default Main;

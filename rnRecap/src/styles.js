import {StyleSheet, Dimensions} from 'react-native';

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */
const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  todoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff9b31',
  },
  todoCount: {
    fontSize: 35,
    color: '#ff9b31',
  },
});

const todo_input = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignSelf: 'center',
    // width: Dimensions.get('window'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export {main, todo_input};

// App.js
import React from 'react';
import TodoList from './TodoList2';
import AddTodo from './AddTodo2';
import { Provider } from 'react-redux';
import store from './store2';

function App2() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App2;
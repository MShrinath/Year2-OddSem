// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos2';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
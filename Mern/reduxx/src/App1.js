import React from 'react';
import Counter from './Counter1';
import { Provider } from 'react-redux';
import counterReducer from './reducers1'; // Import your reducer
import { createStore } from 'redux';

// Create the Redux store
const store = createStore(counterReducer);

function App1() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App1;

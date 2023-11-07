import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
     fetchTasks();
   }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:2222/tasks');
    setTasks(response.data);
  };

  const addTask = async () => {
    if (newTask.trim() === '') return;
    await axios.post('http://localhost:2222/tasks', { text: newTask });
    fetchTasks();
    setNewTask('');
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
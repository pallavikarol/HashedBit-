// src/TodoApp.js
import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const updatedTasks = [...tasks, task.trim()];
    updatedTasks.sort();
    setTasks(updatedTasks);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    const filtered = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(filtered);
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
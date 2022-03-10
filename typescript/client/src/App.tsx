import { useState } from 'react';
import './styles.scss';

import AddTask from './components/AddTask';
import Task from './components/Task';

import { Todo } from './interfaces';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className="App">
      <h1>Tasks</h1>
      <AddTask 
        todos={todos} 
        setTodos={setTodos} 
      />
      <Task 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;

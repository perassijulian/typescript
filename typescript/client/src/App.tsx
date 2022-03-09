import { useState } from 'react';
import './styles.scss';

import AddTask from './components/AddTask';
import Task from './components/Task';

import { Todo } from './interfaces';

function App() {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    text: "",
    done: false,
  });

  const todos: Todo[] = [];

  return (
    <div className="App">
      <h1>Tasks</h1>
      <AddTask 
        todo={todo} 
        setTodo={setTodo} 
      />
      <Task todo={todo} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  type Place = 'Home' | 'Work' | { custom: string };

  type Todo = Readonly<{
      id: number,
      text: string,
      done: boolean,
      place?: Place,
  }>

  const [todo, setTodo] = useState<Todo>({
    id: 0,
    text: "",
    done: false,
});

  return (
    <div className="App">
      <h1>Tasks</h1>
      <AddTask todo={todo} setTodo={setTodo} />
      <Task todo={'holi'} />
    </div>
  );
}

export default App;

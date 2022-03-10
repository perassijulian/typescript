import "./styles.scss";
import { Todo } from '../interfaces';


interface TaskProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Task = ({ todos, setTodos }: TaskProps ) => {
    type completedTodo = Todo & {
        readonly done: true
    }

    const toggleTodo = (todo: Todo): Todo => {
      console.log(todo)
        return {...todo, done: !todo.done}
    }

    const toggleTask = (todo: Todo) => {
      const todoToggled: Todo= toggleTodo(todo);
      const newTodos: Todo[] = [...todos];
      newTodos[todo.id] = todoToggled;
      setTodos(newTodos);
    }

    const completeAll = (todosArray: readonly Todo[]) => {
        setTodos(todosArray.map((todo) => ({
            ...todo,
            done: true
        })))
    }

//     const placeToString = (place: Place): string => {
//         switch (place) {
//             case 'Home':
//                 return '🏘️ Home';
        
//             case 'Work':
//                 return '🏭 Work';
        
//             default:
//                 return '📍 '+ place.custom;
//         }
//     }
    
  return (
    <div className='task'>
      {todos.map((todo) => {
        return (
          <div className="task--item">
            <input 
              type='checkbox' 
              key={todo.id} 
              checked={todo.done} 
              onChange={() => toggleTask(todo)}
            ></input>
            <p>{todo.text}</p>
          </div>
        )})}
        <button onClick={() => completeAll(todos)}>Mark all as done</button>
    </div>
  )
}

export default Task
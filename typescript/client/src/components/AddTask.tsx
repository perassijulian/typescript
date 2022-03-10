import React, { useState } from 'react'
import { Todo } from '../interfaces';

interface AddTaskProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Readonly<Todo>[]>>
}

const AddTask = ({ todos, setTodos }: AddTaskProps) => {
    const defaultTodo: Todo = {
        id: 0,
        text: "",
        done: false,
      }
    
    const [todo, setTodo] = useState<Todo>(defaultTodo);

    function handleChange(e: React.ChangeEvent<HTMLInputElement> ) {
        setTodo({
            id: todos.length, 
            text: e.currentTarget.value, 
            done: false
        })
    }

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo(defaultTodo);
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" name= "text" value={todo.text} onChange={handleChange}></input>
                {/* <input type="text" name= "place" value={todo.place} onChange={handleChange}></input> */}
                <button> ADD TASK</button>
            </form>
        </div>
    )
}

export default AddTask
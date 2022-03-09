import React from 'react'
import { Todo } from '../interfaces';

interface AddTaskProps {
    todo: Todo;
    setTodo: React.Dispatch<React.SetStateAction<Todo>>
}

const AddTask = ({ todo, setTodo }: AddTaskProps) => {

    function handleChange(e: React.ChangeEvent<HTMLInputElement> ) {
        setTodo({...todo, text: e.currentTarget.value})
    }

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(todo);

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
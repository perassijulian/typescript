import React from 'react'

type Place = 'Home' | 'Work' | { custom: string };

type Todo = Readonly<{
    id: number,
    text: string,
    done: boolean,
    place?: Place,
}>

interface AddTaskProps {
    todo: Todo;
    setTodo: React.Dispatch<React.SetStateAction<Todo>>
}

const AddTask = ({ todo, setTodo }: AddTaskProps) => {

    const todos: Todo[] = [];

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
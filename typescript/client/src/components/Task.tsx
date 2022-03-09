import "./styles.scss";

interface TaskProps {
    todo: string;
}

const Task = ({ todo }: TaskProps ) => {
//     type completedTodo = Todo & {
//         readonly done: true
//     }

//     const toggleTodo = (todo: Todo): Todo => {
//         return {...todo, done: !todo.done}
//     }

//     const completeAll = (todosArray: readonly Todo[]): completedTodo[] => {
//         return todosArray.map((todo) => ({
//             ...todo,
//             done: true
//         }))
//     }

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
        <p>{todo}</p>
    </div>
  )
}

export default Task
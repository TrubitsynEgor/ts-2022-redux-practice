import { Todo } from "../types"

interface ITodoItem extends Todo {
	className?: string
	removeTodo: (id: Todo['id']) => void
	toggleTodo: (id: Todo['id']) => void
}



const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }: ITodoItem) => {

	const styles = completed ? 'through' : 'none'

	return (
		<li className={'item'} style={{ color: 'red', background: 'white' }}>
			<input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
			<span className={styles}>{title}</span>
			<span className='close' onClick={() => removeTodo(id)}>&times;</span>
		</li>
	)
}


export default TodoItem
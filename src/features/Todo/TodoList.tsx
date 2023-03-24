import { useAppDispatch, useAppSelector } from 'store/redux-hook'
import { Todo } from '../../types'
import TodoItem from '../../components/TodoItem'
import { removeTodo, toggleTodo } from './todoSlice'
import { selectAllTodos } from './todoSelectors'



const TodoList = () => {

	const todos = useAppSelector(selectAllTodos)
	const dispatch = useAppDispatch()

	const handleToggleTodo = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
	}

	const handleRemoveTodo = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}

	return (
		<ul>
			{todos.map((todo: Todo) => (
				<TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
			))}
		</ul>
	)
}

export default TodoList
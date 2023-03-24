import { useAppDispatch, useAppSelector } from 'store/redux-hook'
import { Todo } from 'types'
import TodoItem from 'components/TodoItem'
import { selectAsyncTodos } from './asyncTodoSelector'
import { useEffect } from 'react'
import { fetchAllTodos, removeTodo, toggleTodo } from './todoAsyncActions'




const AsyncTodoList = () => {

	const { list } = useAppSelector(selectAsyncTodos)
	const dispatch = useAppDispatch()

	const handleToggleTodo = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
	}

	const handleRemoveTodo = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}

	useEffect(() => {
		dispatch(fetchAllTodos())
	}, [dispatch])

	return (
		<ul>
			{list.map((todo: Todo) => (
				<TodoItem key={todo.id} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
			))}
		</ul>
	)
}

export default AsyncTodoList
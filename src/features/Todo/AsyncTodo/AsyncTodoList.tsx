import { useAppDispatch, useAppSelector } from 'store/redux-hook'
import { Todo } from 'types'
import TodoItem from 'components/TodoItem'
import { selectAsyncTodos } from './asyncTodoSelector'
import { useEffect } from 'react'
import { fetchAllTodos } from './todoAsyncActions'
import { useSelector } from 'react-redux'




const AsyncTodoList = () => {

	const { list } = useSelector(selectAsyncTodos)
	const dispatch = useAppDispatch()

	const handleToggleTodo = (id: Todo['id']) => {
		// dispatch(toggleTodo(id))
	}

	const handleRemoveTodo = (id: Todo['id']) => {
		// dispatch(removeTodo(id))
	}

	useEffect(() => {
		dispatch(fetchAllTodos())
	}, [])

	return (
		<ul>
			{list.map((todo: Todo, idx) => (
				<TodoItem key={idx} {...todo} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
			))}
		</ul>
	)
}

export default AsyncTodoList
import AddNewItem from 'components/NewItemForm'
import { useAppDispatch } from 'store/redux-hook'
import { createTodo } from './todoAsyncActions'

export const NewAsyncTodo = () => {
	const dispatch = useAppDispatch()

	const handleNewTodo = (title: string) => {
		dispatch(createTodo(title))
	}

	return (
		<AddNewItem placeholder='Add new todo' handleClick={handleNewTodo} />
	)
}
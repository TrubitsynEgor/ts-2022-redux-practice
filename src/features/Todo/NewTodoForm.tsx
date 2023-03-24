import AddNewItem from 'components/NewItemForm'
import { useAppDispatch } from 'store/redux-hook'
import { addTodo } from './todoSlice'

export const NewTodoForm = () => {
	const dispatch = useAppDispatch()

	const handleNewTodo = (title: string) => {
		dispatch(addTodo(title))
	}

	return (
		<AddNewItem placeholder='Add new todo' handleClick={handleNewTodo} />
	)
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from 'types'


const initialState: Todo[] = []

const todoSlice = createSlice({
	name: '@todos',
	initialState,
	reducers: {
		toggleTodo: (state, action: PayloadAction<Todo['id']>) => {
			const todo = state.find(el => el.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed
			}
		},
		removeTodo: (state, action: PayloadAction<Todo['id']>) => {
			return state.filter(todo => todo.id !== action.payload)
		},
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo = {
				id: Date.now(),
				title: action.payload,
				completed: false
			}
			return [newTodo, ...state]
		},
	}
})

export default todoSlice.reducer


export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
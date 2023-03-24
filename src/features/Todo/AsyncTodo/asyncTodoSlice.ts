import { createSlice } from '@reduxjs/toolkit'
import { Todo } from 'types'
import { createTodo, fetchAllTodos } from './todoAsyncActions'

type todoSlice = {
	status: 'idle' | 'loading' | 'finished' | 'error'
	list: Todo[]
}
const initialState: todoSlice = {
	status: 'idle',
	list: []
}

const asyncTodoSlice = createSlice({
	name: '@todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllTodos.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchAllTodos.fulfilled, (state, action) => {
				state.status = 'finished';
				state.list = action.payload;
			})
			.addCase(fetchAllTodos.rejected, (state) => {
				state.status = 'error'
			})
			.addCase(createTodo.fulfilled, (state, action) => {
				state.list.push(action.payload)
			})
	}
})

export default asyncTodoSlice.reducer


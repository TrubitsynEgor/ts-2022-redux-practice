import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from 'features/Todo/todoSlice'
import asyncTodoReducer from 'features/Todo/AsyncTodo/asyncTodoSlice'

const rootReducer = combineReducers({
	todos: todoReducer,
	asyncTodos: asyncTodoReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer> //<typeof store.getState> Если не использовали combineReducers()
// Эта штука нужна чтобы корректно работал hook useSelector, но есть и другие варианты...

export type AppDispatch = typeof store.dispatch; // <<<< Типизация useDispatch
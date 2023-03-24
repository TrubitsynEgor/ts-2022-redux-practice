import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from 'features/Todo/todoSlice'


const rootReducer = combineReducers({
	todos: todoReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer> //<typeof store.getState> Если не использовали combineReducers()
// Эта штука нужна чтобы корректно работал hook useSelector, но есть и другие варианты...

export type AppDispatch = typeof store.dispatch; // <<<< Типизация useDispatch
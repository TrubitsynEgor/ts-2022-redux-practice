import { RootState } from "store/store";

export const selectAsyncTodos = (state: RootState) => state.asyncTodos;
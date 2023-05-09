import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import TodosState from './types/TodosState';

const initialState: TodosState = {
	todos: [],
};

export const loadTodos = createAsyncThunk('todos/loadTodos', () =>
	api.getAll()
);

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadTodos.fulfilled, (state, action) => {
			state.todos = action.payload.todos;
		});
	},
});

export default todosSlice.reducer;

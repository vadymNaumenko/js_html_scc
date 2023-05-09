import MyProductsState from './types/MyProductsState';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';

const initialState: MyProductsState = {
	myProducts: [],
};

export const loadMyProducts = createAsyncThunk('users', () => api.getAll());

export const myProductSlice = createSlice({
	name: 'myProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadMyProducts.fulfilled, (state, action) => {
			state.myProducts = action.payload;
		});
	},
});

export default myProductSlice.reducer;

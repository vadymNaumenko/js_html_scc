import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductsState from './types/ProductsState';
import * as api from './api';

const initialState: ProductsState = {
	products: [],
};

export const loadProducts = createAsyncThunk(
	'products/loadProducts', // action type - тип действтия

	() => api.getAll() // action payload - полезная нагрузка
	// - то что приходит с бэка
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	// редюсеры - это те функции,
	// где не требуется делать ассинхронные запросы на бэк - оставили пустыми
	reducers: {},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	// экстраредюсеры - работают с асинхронными запросами
	// - например запросы на бэк
	extraReducers: (builder) => {
		builder.addCase(loadProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
	},
});

export default productsSlice.reducer;

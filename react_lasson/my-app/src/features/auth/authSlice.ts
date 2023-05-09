import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';
import AuthState from './types/AuthState';
import Credentials from './types/Credentials';

const initialState: AuthState = {}; // по умолчанию поле юзер оставили пустым

export const login = createAsyncThunk('auth/login', (creditials: Credentials) =>
	api.getCurrentUser(creditials)
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export default authSlice.reducer;

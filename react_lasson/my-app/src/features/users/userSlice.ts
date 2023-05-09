import UserState from './types/UserState';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';

const initialState: UserState = {
	users: [],
};

export const loadUser = createAsyncThunk('users/all', () => api.getAllUsers());
export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadUser.fulfilled, (state, action) => {
			state.users = action.payload.users;
		});
	},
});

export default userSlice.reducer;

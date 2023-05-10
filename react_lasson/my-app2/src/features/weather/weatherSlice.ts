import WeatherState from './types/WeatherState';
import Weather from './types/Weather';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/namespace
import * as api from './api';

const initialState: WeatherState = {
	weather: [],
};

export const loadWeather = createAsyncThunk('weather', () => api.getWeather());

export const weatherSelect = createSlice({
	name: 'weather',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(loadWeather.fulfilled, (state, action) => {
			state.weather = action.payload;
		});
	},
});

export default weatherSelect.reducer;

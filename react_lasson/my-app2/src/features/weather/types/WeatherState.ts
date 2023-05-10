import Weather from './Weather';

export default interface WeatherState {
	weather: Weather[];
	error?: string;
}

import Weather from './types/Weather';

export async function getWeather(): Promise<Weather[]> {
	const res = await fetch('https://wttr.in/London');
	return res.json();
}

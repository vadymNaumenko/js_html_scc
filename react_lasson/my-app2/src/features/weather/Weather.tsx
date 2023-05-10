import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { loadWeather } from './weatherSlice';

export default function WeatherPage(): JSX.Element {
	const weather = useAppSelector((state: RootState) => state.weather.weather);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadWeather());
	}, []);

	return (
		<div>
			<h1> weather</h1>
			{weather.map((w) => (
				<p>{w.url}</p>
			))}
		</div>
	);
}

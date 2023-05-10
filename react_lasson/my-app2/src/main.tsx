// eslint-disable-next-line import/default
import React from 'react';
// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, HashRouter } from 'react-router-dom';
import '../src/features/weatherPage/GetWeather.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</>
);

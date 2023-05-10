// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function Layout(): JSX.Element {
	return (
		<div>
			<header></header>
			<NavBar />
			<Outlet />
			<footer></footer>
		</div>
	);
}

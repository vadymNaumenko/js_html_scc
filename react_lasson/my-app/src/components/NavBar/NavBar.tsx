// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

export default function NavBar(): JSX.Element {
	const user = useAppSelector((state: RootState) => state.auth.user);
	return (
		<nav>
			{user?.username && (
				<>
					<NavLink to="counter">Counter</NavLink>
					<NavLink to="products">Products</NavLink>
					<NavLink to="posts">Posts</NavLink>
					<NavLink to="users">Users</NavLink>
					<NavLink to="posts/add">created</NavLink>
					<NavLink to="/">Home</NavLink>
				</>
			)}

			<NavLink to="login">Sign in</NavLink>
		</nav>
	);
}

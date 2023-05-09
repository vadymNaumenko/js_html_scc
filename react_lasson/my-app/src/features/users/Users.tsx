import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { loadUser } from './userSlice';

export default function Users(): JSX.Element {
	const users = useAppSelector((state: RootState) => state.users.users);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, []);
	console.log('users');
	console.log(users);

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<p>{user.lastName}</p>
						<p>{user.age}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

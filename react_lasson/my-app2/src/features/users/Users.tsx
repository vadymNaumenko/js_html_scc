import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { loadUser } from './userSlice';
import { Link } from 'react-router-dom';
import style from './user.module.css';

export default function Users(): JSX.Element {
	const users = useAppSelector((state: RootState) => state.users.users);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, []);
	console.log('users');
	console.log(users);

	return (
		<div className={style.beckImage}>
			<ul className={style.UserList}>
				{users.map((user) => (
					<li key={user.id} className={style.userCard}>
					<Link to={`${user.id}`}>
							<img className={style.UserImage} src={user.image} alt="user" />
						</Link>
						<p className={style.userName}>{user.lastName}</p>
						<p className={style.userAge}>{user.age}</p>
						<Link className={style.userLink} to={`${user.id}`}>
							Details
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

// .userCard{
//     background-color: aqua;
//     border-radius: 14px;
//     width: 350px;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     align-content: center;
// }

// .UserImage{
//     width: 300px;
// }

// .UserList{
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px;
// }

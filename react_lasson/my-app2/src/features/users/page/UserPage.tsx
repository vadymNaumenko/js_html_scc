import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import User from '../types/User';
import { Link } from 'react-router-dom';
import style from './userPage.module.css';

export default function UserPage(): JSX.Element {
	const { id } = useParams();
	const [user, setUser] = useState<User | undefined>(undefined);

	async function getUser(): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		const res = await fetch(`https://dummyjson.com/users/${id}`);
		const us = await res.json();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setUser(us);
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className={style.forDivCard}>
			<div className={style.divImage}>
				<img src={user?.image} alt="user" />
			</div>
			<p>
				<span className={style.spanText}>Last name:</span> {user?.lastName}
			</p>
			<p>
				<span className={style.spanText}>Age:</span> {user?.age}
			</p>
			<p>
				<span className={style.spanText}>Birth date:</span> {user?.birthDate}
			</p>
			<p>
				<span className={style.spanText}>Heigt: </span>
				{user?.height}
			</p>
			<p>
				<span className={style.spanText}>Email:</span> {user?.email}
			</p>
			<p>
				<span className={style.spanText}>Phone: </span>
				{user?.phone}
			</p>
			<p>
				<span className={style.spanText}>Agent:</span> {user?.userAgent}
			</p>
			{/* <Link to={`${user?.id}`}>Deteils</Link> */}
		</div>
	);
}

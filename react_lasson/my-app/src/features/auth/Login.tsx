import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { login } from './authSlice';
import { useNavigate } from 'react-router';

export default function Login(): JSX.Element {
	const dispatch = useAppDispatch();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const navigate = useNavigate();

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		dispatch(login({ username, password }))
			.then((res) => {
				// fullfiled
				// мы смотрели ответ с сервера - нас интересовало
				// лежит ли в ответе Юзер или ошибка с полем message
				const payload = res.payload as { message: string };
				if (payload.message) {
					setMessage(payload.message);
				} else {
					navigate('/');
				}
			})
			.catch((err) => {
				// rejected // в данном примере мы не попадем сюда
				console.log(err);
			});
	}

	return (
		<div>
			<p>username: kminchelle password: 0lelplR</p>
			<form onSubmit={handleSubmit}>
        <p>{message}</p>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">login</button>
			</form>
		</div>
	);
}

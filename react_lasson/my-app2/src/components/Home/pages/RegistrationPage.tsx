import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(): JSX.Element {
	const [email, setEmail] = useState<string>('');
	const [emailDirty, setEmailDirty] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<string>(
		'Емейл не может быть пустым'
	);
	const [passwordError, setPasswordError] = useState(
		'Пароль не может быть пустым'
	);
	const [password, setPassword] = useState<string>('');
	const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
	const [formValid, setFormValid] = useState<boolean>(false);

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError]);
	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Емейл некоректный');
			if (!e.target.value) {
				setEmailError('Емейл не может быть пустым');
			}
		} else {
			setEmailError('');
		}
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 3 || e.target.value.length > 8) {
			setPasswordError('Пароля должна бить меньше 8 и больше 3');
			if (!e.target.value) {
				setPasswordError('Пароль не может быть пустым');
			}
		} else {
			setPasswordError('');
		}
	};
	const blurHendler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true);
				break;
			case 'password':
				setPasswordDirty(true);
				break;
		}
	};

	return (
		<div>
			<form>
				<h1>Registriren</h1>

				{emailDirty && emailError && (
					<div style={{ color: 'red' }}>{emailError}</div>
				)}
				<div>
					<input
						onChange={(e) => {
							emailHandler(e);
						}}
						value={email}
						onBlur={(e) => blurHendler(e)}
						name="email"
						type="text"
						placeholder="Enrter your email"
					/>
				</div>

				{passwordDirty && passwordError && (
					<div style={{ color: 'red' }}>{passwordError}</div>
				)}
				<div>
					<input
						onChange={(e) => {
							passwordHandler(e);
						}}
						value={password}
						onBlur={(e) => blurHendler(e)}
						name="password"
						type="password"
						placeholder="Enrter your pasword"
					/>
				</div>
				<div>
					<button disabled={!formValid} type="submit">
						Регистрация
					</button>
				</div>
			</form>
		</div>
	);
}

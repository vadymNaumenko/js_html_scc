// import {reduxForm} from 'redux-form';
import { Admin } from '../../../admin/Admin';
import { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';

export default function LoginPage(): JSX.Element {
	// const LoginReduxForm = reduxForm({
	// 	form: 'form',
	// })(ContactForm);

	// return (
	// 	<div>
	// 		<h1>Login</h1>
	// 		<form>
	// 			<div>
	// 				<input placeholder={'Login'} />
	// 			</div>
	// 			<div>
	// 				<input placeholder={'Password'} />
	// 			</div>
	// 			<div>
	// 				<input type={'checkbox'} /> remember me
	// 			</div>
	// 			<div>
	// 				<button type={'submit'}>Login</button>
	// 			</div>
	// 		</form>
	// 	</div>
	// );
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (Admin.email === email && Admin.pasword === password) {
			Admin.isAdmin = true;
		}
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

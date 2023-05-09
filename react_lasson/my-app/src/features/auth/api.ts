import Credentials from './types/Credentials';
import User from './types/User';

export async function getCurrentUser({
	username,
	password,
}: Credentials): Promise<User> {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username,
			password,
		}),
	});
	return res.json();
}

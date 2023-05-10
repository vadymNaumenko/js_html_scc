import User from './types/User';
export async function getAllUsers(): Promise<{ users: User[] }> {
	const res = await fetch('https://dummyjson.com/users');
	return res.json();
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Admin } from '../../admin/Admin';

export default function Home(): JSX.Element {
	return (
		<div>
			<Link to={'/registration'}>Registration</Link>
			<br />
			<Link to={'/login'}>Login</Link>
		</div>
	);
}

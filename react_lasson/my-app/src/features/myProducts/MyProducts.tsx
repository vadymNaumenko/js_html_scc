import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { getAll } from './api';
import { loadMyProducts } from './myProductsSlice';

export default function MyProducts(): JSX.Element {
	const myproducts = useAppSelector(
		(state: RootState) => state.myproducts.myProducts
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadMyProducts());
	}, []);

	return (
		<div>
			<h1>my products</h1>
			{myproducts.map((p) => (
				<li key={p.id}>
					<p>{p.title}</p>
					<p>{p.description}</p>
				</li>
			))}
		</div>
	);
}

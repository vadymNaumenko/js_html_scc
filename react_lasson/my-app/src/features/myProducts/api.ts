import MyProduct from './types/MyProduct';

export async function getAll(): Promise<MyProduct[]> {
	const res = await fetch('https://fakestoreapi.com/products');
	return res.json();
}

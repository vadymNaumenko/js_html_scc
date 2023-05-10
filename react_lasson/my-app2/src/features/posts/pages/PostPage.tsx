import Post from '../types/Post';
import * as path from 'path';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import style from './Post.module.css';

export default function PostPage(): JSX.Element {
	const { id } = useParams();
	const [post, setPost] = useState<Post | undefined>(undefined);
	let title2: string;
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async function getById(): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		const res = await fetch(`https://dummyjson.com/posts/${id}`);
		const obj = await res.json();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setPost(obj);
	}

	useEffect(() => {
		getById();
	}, []);

	return (
		<div className={style.containerPerent}>
			<div className={style.containerDiv}>
				<h1>{post?.title}</h1>
				<p>{post?.body}</p>
				<p>{post?.userId}</p>
			</div>
		</div>
	);
}

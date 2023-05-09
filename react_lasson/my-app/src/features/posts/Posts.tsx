import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { deletePost } from './PostSlice';

export default function PostsPage(): JSX.Element {
	const posts = useAppSelector((state: RootState) => state.posts.posts);
	// const dispatch = useAppDispatch(); // перенесли в лейаут
	// useEffect(() => {
	//  dispatch(loadPosts());
	// }, []);
	const dispatch = useAppDispatch();

	function handleDelete(id: number): void {
		dispatch(deletePost(id));
	}
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<button type="button" onClick={() => handleDelete(post.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

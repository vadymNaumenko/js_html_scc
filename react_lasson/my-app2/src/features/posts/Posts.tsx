import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { loadUser } from '../users/userSlice';
import { loadPosts } from './PostSlice';
import style from './posts.module.css';
import { Link } from 'react-router-dom';

export default function Posts(): JSX.Element {
	const posts = useAppSelector((state: RootState) => state.posts.posts);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadPosts());
	}, []);

	return (
		<div className={style.backImg}>
			<Link to={'add'} style={{ color: 'blue', fontSize: '50px' }}>
				Create new post
			</Link>
			<ul className={style.styleUl}>
				{posts.map((post) => (
					<li className={style.styleLi} key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<div className={style.buttonDiv}>
							<Link className={style.detailsButton} to={`${post.id}`}>
								details
							</Link>
							<Link
								className={style.detailsButton}
								style={{ color: 'red' }}
								to={`delete/${post.id}`}
							>
								delete
							</Link>
						</div>

						{/*<p>{user.age}</p>*/}
					</li>
				))}
			</ul>
		</div>
	);
}

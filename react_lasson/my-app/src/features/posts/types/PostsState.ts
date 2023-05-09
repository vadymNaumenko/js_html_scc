import Post from './Post';

export default interface PostsState {
	posts: Post[];
	error?: string;
}

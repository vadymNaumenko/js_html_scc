import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import PostsState from './types/PostsState';
import PostDto from './types/PostDto';

const initialState: PostsState = {
	posts: [],
};

export const loadPosts = createAsyncThunk('posts/all', () => api.getAll());
export const createPost = createAsyncThunk(
	'posts/createPost',
	(post: PostDto) => api.createPost(post)
);

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadPosts.fulfilled, (state, action) => {
				state.posts = action.payload.posts;
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.posts.push(action.payload);
			})
			.addCase(createPost.rejected, (state, action) => {
				state.error = 'Error: unable to create post';
			});
	},
});

export default postsSlice.reducer;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
// eslint-disable-next-line
import usersReducer from '../features/users/userSlice';
import myProductReducer from '../features/myProducts/myProductsSlice';
import postsReduce from '../features/posts/PostSlice';
import authReducer from '../features/auth/authSlice';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		products: productsReducer,
		users: usersReducer,
		myproducts: myProductReducer,
		posts: postsReduce,
		auth: authReducer,
		todos: todosReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

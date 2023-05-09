import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Products from './features/products/Products';
import Users from './features/users/Users';
import MyProducts from './features/myProducts/MyProducts';
import { Route, Routes } from 'react-router';
import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Posts from './features/posts/Posts';
import PostForm from './features/posts/PostForm';
import Login from './features/auth/Login';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route path="products" element={<Products />} />
				<Route path="users" element={<Users />} />
				<Route path="posts" element={<Posts />} />
				<Route path="login" element={<Login />} />
				<Route path="posts/add" element={<PostForm />} />

			</Route>
		</Routes>
	);
}

export default App;

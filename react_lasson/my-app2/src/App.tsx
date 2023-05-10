import logo from './logo.svg';
import './App.css';
import Products from './features/products/Products';
import Users from './features/users/Users';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Posts from './features/posts/Posts';
import WeatherPage from './features/weather/Weather';
import PostPage from './features/posts/pages/PostPage';
import Getweather from './features/weatherPage/Getweather';
import '../src/features/weatherPage/GetWeather.module.css';
import UserPage from './features/users/page/UserPage';
import RegistrationPage from './components/Home/pages/RegistrationPage';
import LoginPage from './components/Home/pages/LoginPage';
import PostForm from './features/posts/PostForm';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<div>
							<Home />
							<h1>body</h1>
						</div>
					}
				/>
				<Route path="products" element={<Products />} />
				<Route path="users" element={<Users />} />
				<Route path="users/:id" element={<UserPage />} />
				<Route path="posts/:id" element={<PostPage />} />
				{/* <Route path="posts/delete/:id" element={<PostPage />} /> */}
				<Route path="posts/add" element={<PostForm />} />
				<Route path="posts" element={<Posts />} />
				<Route path="weather" element={<Getweather />} />
				<Route path="registration" element={<RegistrationPage />} />
				<Route path="login" element={<LoginPage />} />
			</Route>
		</Routes>
	);
}

export default App;

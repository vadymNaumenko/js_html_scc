import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Router, Routes } from 'react-router-dom';
import Cocktail from './components/Cocktail/Cocktail';
import RandomDog from './components/RandomDog/RandomDox';
// import Layout from './Layout/Layout';
import NavBar from './components/NavBar/NavBar'
import Dog2 from './components/Dog2/Dog2'; 
import Products from './components/Products/Products';
import ProductPage from './components/Products/productPage/ProductPage';
import Users from './components/Users/Users'
import GetUser from './components/Users/userPage/GetUser'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/dog2' element={<Dog2/>} />
      <Route path='/' element={<NavBar></NavBar>}/>
    {/* <Route path='/' element ={<Layout />}> */}
    {/* <Route path="/" element={<RandomDog />} /> */}
      <Route path="/dog" element={<RandomDog />} />
      <Route path="/cocktail" element={<Cocktail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductPage />} />
         <Route path="/users/:userId" element={<GetUser />} />
      <Route path="/users" element={<Users />} />
   
    </ Routes>
  );
}

export default App;

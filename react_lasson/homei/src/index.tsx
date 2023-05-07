import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './components/sendwich/Sendwich';
import Sendwich from './components/sendwich/Sendwich';
import Playground from './components/Playground/Playground';
import RandomDog from './components/RandomDog/RandomDox';
import Cocktail from './components/Cocktail/Cocktail';
import HomeWorkHuck from './components/Home-work-huck/HomeWorkHuck';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <App />




  {/* <Sendwich />
  <Playground />
  <RandomDog />
  <Cocktail />
  <HomeWorkHuck /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

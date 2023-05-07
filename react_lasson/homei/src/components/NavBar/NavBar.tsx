import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, NavLink } from 'react-router-dom';
// import style from './NavBar.module.css';
import style from './NavBar.module.css'

export default function Layout():JSX.Element {
  return (
    <>
      <nav className={style.navBar}>
        <NavLink to="/dog2">Show Dog2</NavLink>
        <NavLink to="/cocktail">Cocktail</NavLink>
        <NavLink to="/dog">dog</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Outlet />
      <footer>
        Здесь будет футер
      </footer>
    </>
  );
}
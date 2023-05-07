import React, { useEffect, useState } from 'react';
import User from './userType/User';
import style from './Users.module.css';
import { Link } from 'react-router-dom';



export default function Users():JSX.Element {
  const [users, setUsers] = useState<User[]>();

  async function getUsers(): Promise<void> {
    const resp = await fetch('https://fakestoreapi.com/users');
    const users = await resp.json();
    console.log(users);
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <div>
      <ul className={style.userList}>
        {users?.map((user) => (
          <li key={user.id} className={style.userCard}>
            <p >Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <Link to={`${user.id}`}>Подробней</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}




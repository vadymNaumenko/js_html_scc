import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IUser from '../userType/User';

export default function User():JSX.Element {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const { userId } = useParams();

  useEffect(() => {
    async function loadUser():Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);
  return (
    <div>
      <h1>{user?.username} </h1>
      <p>{user?.email}</p>
      <Link to="../users">К пользователям</Link>
    </div>
  );
}
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function EditForm():JSX.Element {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  
  function handleSubmit(e: FormEvent<HTMLFormElement>):void{
    e.preventDefault();
    dispatch({type: 'books/editTitle', payload: {title}});
  }
  return (
    <div>
      <h1>Edit Book Title</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
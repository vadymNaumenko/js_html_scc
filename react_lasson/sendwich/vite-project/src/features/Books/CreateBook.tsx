import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateBook(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({type: 'books/add', payload: {title,year,author}});
    setAuthor("");
    setTitle("");
    setYear("");
  }
  return (
    <div>
      <h1>Добавление книги</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
     <input
          placeholder="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
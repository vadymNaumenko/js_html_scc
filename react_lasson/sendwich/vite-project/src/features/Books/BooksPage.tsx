import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

// В этом компоненте отобразим все книги и больше ничего
export default function BooksPage(): JSX.Element {
  const books = useSelector((state: RootState) => state.books.books);
  // state.books.books - имя фичи и ключе под которым лежит массив
  return (
    <div>
      <h1>BooksPage</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import EditForm from "./EditForm";

// В этом компоненте отобразим все книги
export default function BooksPage(): JSX.Element {
  const books = useSelector((state: RootState) => state.books.books);
  // state.books.books - имя фичи и ключ под которым лежит массив
  const dispatch = useDispatch();
  function handleDelete(id:string):void{
    dispatch({type: 'books/delete', action: id});
  }
  
  return (
    <div>
      <h1>BooksPage</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <EditForm bookId={book.id}/>
            <button type="button" onClick={() => handleDelete(book.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
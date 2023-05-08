import Action from "./types/Action";
import BooksState from "./types/BooksState";
import { uid } from 'uid';

const initialState: BooksState = {
  books: [
    {id: '1', title: 'Harry Potter', year: 2001, author: 'J.K. Rouling'},
    {id: '2', title: 'Lord of the Rings', year: 1948, author: 'Tolkien'}
  ],
}

export default function booksReducer(
  state: BooksState = initialState,
  action: Action
):BooksState {
  switch(action.type){
    case 'books/add': 
      return {...state, 
        books: [...state.books, {id: uid(), ...action.payload}] };
    case 'books/delete':
      // как убрать из массива элемент с определенным id 
      return {...state, 
        books: state.books.filter((book)=> book.id !== action.payload)}
    case 'books/editTitle':
      return {...state,
        books: state.books.map((book)=> {
          if (book.id === action.payload.id){
            return {...book, title: action.payload.title}
          }
          return book;
        })
      }
      // TODO edit title
    default: return state;
  }
}

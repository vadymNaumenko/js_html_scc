import {combineReducers, createStore} from 'redux';
import counterReducer from './features/counter/counterReducer';
import sandwichReducer from './features/sandwich/sandwitchReducer';
import booksReducer from './features/Books/BooksReducer';

const store = createStore(combineReducers({
  counter: counterReducer,
  // cars: carsReducer, // пример добавления новой фичи
  sandwich: sandwichReducer,
  books: booksReducer
  
}))

export default store;

export type RootState = ReturnType<typeof store.getState>

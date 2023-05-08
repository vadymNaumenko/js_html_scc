import './App.css';
import BooksPage from './features/books/BooksPage';
import CreateBook from './features/books/CreateBook';
import Counter from './features/counter/Counter';
import SandwichPage from './features/sandwich/SandwichPage';

function App():JSX.Element {
  return (
    <>
      <Counter />
      <SandwichPage />
      <CreateBook />
      <BooksPage />
    </>
  );
}

export default App;

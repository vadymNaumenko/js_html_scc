import './App.css';
import BooksPage from './features/Books/BooksPage';
import CreateBook from './features/Books/CreateBook';
import Counter from './features/counter/Counter';
import SandwitchPage from './features/sandwich/SandwitchPage';

function App() {

  return (
    <>
  <Counter />
  <SandwitchPage />
  <CreateBook />
  <BooksPage />
    </>
  );
}

export default App;

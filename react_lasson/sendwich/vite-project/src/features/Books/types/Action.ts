// CRUD операции: CREATE, READ, UPDATE, DELETE
// Методы HTTP: GET, POST, PUT, PATCH, DELETE

type Action = 
| {type: 'books/add', payload: 
{ title: string; year: number; author: string;}}
| {type: 'books/delete', payload: string} // удаляем по id, id в нашем примере это стринг
| {type: 'books/editTitle', payload: string};
export default Action;
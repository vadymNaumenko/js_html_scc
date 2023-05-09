import Todo from './Todo';

// GET
export async function getAll(): Promise<{ todos: Todo[] }> {
 const res = await fetch('https://dummyjson.com/todos');
 return res.json();
}
import Post from './types/Post';
import PostDto from './types/PostDto';

export async function getAll(): Promise<{ posts: Post[] }> {
	const res = await fetch('https://dummyjson.com/posts');
	return res.json();
}

// POST - создание новой сущности
export async function createPost(post: PostDto): Promise<Post> {
	const res = await fetch('https://dummyjson.com/posts/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(post),
	});
	// возвращают с бэка в данной апишке - только id
	const { id } = await res.json();
	return { ...post, id };
}
// DELETE - метод удаления
export async function deletePost(id: number): Promise<Post> {
	const res = await fetch(`https://dummyjson.com/posts/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}

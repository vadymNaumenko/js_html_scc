import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodos } from './selectors';
import { loadTodos } from './todosSlice';

export default function TodosPage(): JSX.Element {
	const todos = useAppSelector((state) => state.todos.todos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadTodos());
	}, []);

	return (
		<div>
			<h1>TodosPage</h1>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<p
							style={
								todo.completed
									? { textDecoration: 'line-through' }
									: { textDecoration: 'none' }
							}
						>
							{todo.todo}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

import { useLocalStorage } from '@/hooks/useLocalStorage'

import { LS_KEY } from '@/constants'

import type { Todo } from '@/types/data'

import Header from '@/components/Header'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'

import styles from './App.module.scss'

export default function App() {
	const [todos, setTodos] = useLocalStorage<Todo[]>([], LS_KEY)

	const handleAddTodo = (newTodo: Todo) => {
		setTodos((curTodos) => [...curTodos, newTodo])
	}

	const handleDeleteTodo = (id: string) => {
		setTodos((curTodos) => curTodos.filter((todo) => todo.id !== id))
	}

	const handleToggleTodo = (id: string) => {
		setTodos((curTodos) =>
			curTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		)
	}

	return (
		<div className={styles.app}>
			<Header />
			<TodoForm onAddTodo={handleAddTodo} />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				))}
			</TodoList>
		</div>
	)
}

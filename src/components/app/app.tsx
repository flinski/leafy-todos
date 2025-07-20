import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LS_KEY } from '@/constants'
import type { Todo } from '@/types/data'
import Header from '@/components/Header'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'
import Stats from '@/components/Stats'
import Actions from '@/components/Actions'
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

	const handleClearAllTodos = () => {
		setTodos([])
	}

	const handleClearCompletedTodos = () => {
		setTodos((curTodos) => curTodos.filter((todo) => !todo.completed))
	}

	return (
		<div className={styles.app}>
			<Header />
			<TodoForm onAddTodo={handleAddTodo} />
			<Stats todos={todos} />
			{todos.length > 0 ? (
				<>
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
					<Actions
						onClearAllTodos={handleClearAllTodos}
						onClearCompletedTodos={handleClearCompletedTodos}
					/>
				</>
			) : null}
		</div>
	)
}

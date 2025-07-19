import { useState } from 'react'

import type { Todo } from '@/types/data'

import Header from '@/components/Header'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'

import styles from './App.module.scss'

const initialState: Todo[] = [
	{ id: '1', title: 'Add tasks', completed: true },
	{ id: '2', title: 'Delete tasks', completed: true },
	{ id: '3', title: 'Complete tasks', completed: true },
	{ id: '4', title: 'Save to localStorage', completed: false },
	{ id: '5', title: 'Clear all / completed', completed: false },
	{ id: '6', title: 'Completed slider / counter', completed: false },
]

export default function App() {
	const [todos, setTodos] = useState<Todo[]>(initialState)

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

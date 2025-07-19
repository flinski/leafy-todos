import { useState } from 'react'

import type { Todo } from '@/types/data'

import styles from './TodoForm.module.scss'

const { form, input, button } = styles

interface TodoFormProps {
	onAddTodo: (newTodo: Todo) => void
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
	const [title, setTitle] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const newTodo: Todo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false,
		}

		onAddTodo(newTodo)
		setTitle('')
	}

	return (
		<form className={form} onSubmit={handleSubmit}>
			<input
				className={input}
				type="text"
				placeholder="Add new task..."
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<button className={button}>New task</button>
		</form>
	)
}

import { useState } from 'react'
import { generateId } from '@/utils'
import type { Todo } from '@/types/data'
import styles from './TodoForm.module.scss'

interface TodoFormProps {
	onAddTodo: (newTodo: Todo) => void
}

const { form, input, button } = styles

export default function TodoForm({ onAddTodo }: TodoFormProps) {
	const [title, setTitle] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!title) return

		const newTodo: Todo = {
			id: generateId(),
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
				size={1}
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<button className={button}>New task</button>
		</form>
	)
}

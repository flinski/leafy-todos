import { useState } from 'react'
import type { Todo } from '@/types/data'
import CrossIcon from '@/components/icons/CrossIcon'
import styles from './TodoItem.module.scss'

interface TodoItemProps {
	todo: Todo
	onDeleteTodo: (id: string) => void
	onToggleTodo: (id: string) => void
}

const { item, customCheckbox, hiddenCheckbox, checkbox, title, deleteBtn } = styles

export default function TodoItem({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) {
	const [hover, setHover] = useState(false)

	return (
		<li className={item} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<label className={customCheckbox}>
				<input
					className={hiddenCheckbox}
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggleTodo(todo.id)}
				/>
				<span className={checkbox}></span>
			</label>
			<span className={title} title={todo.title}>
				{todo.title}
			</span>
			{hover ? (
				<button className={deleteBtn} onClick={() => onDeleteTodo(todo.id)}>
					<CrossIcon />
				</button>
			) : null}
		</li>
	)
}

import type { ReactNode } from 'react'

import styles from './TodoList.module.scss'

interface TodoListProps {
	children: ReactNode
}

export default function TodoList({ children }: TodoListProps) {
	return <ul className={styles.list}>{children}</ul>
}

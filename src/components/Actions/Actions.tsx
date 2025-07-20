import styles from './Actions.module.scss'

interface ActionsProps {
	onClearAllTodos: () => void
	onClearCompletedTodos: () => void
}

export default function Actions({ onClearAllTodos, onClearCompletedTodos }: ActionsProps) {
	return (
		<div className={styles.actions}>
			<button onClick={onClearCompletedTodos}>Clear completed</button>
			<button onClick={onClearAllTodos}>Clear all</button>
		</div>
	)
}

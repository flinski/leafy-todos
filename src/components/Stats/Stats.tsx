import type { Todo } from '@/types/data'
import styles from './Stats.module.scss'

interface StatsProps {
	todos: Todo[]
}

const { stats, range, completed, info } = styles

export default function Stats({ todos }: StatsProps) {
	if (todos.length === 0) {
		return <div className={info}>Start adding your todos</div>
	}

	const numTodos = todos.length
	const numCompletedTodos = todos.filter((todo) => todo.completed).length
	const completedPct = Math.round((numCompletedTodos / numTodos) * 100)

	return (
		<div className={stats}>
			<div className={range}>
				<span></span>
			</div>
			<div className={completed}>
				{numCompletedTodos} / {numTodos} Completed ({completedPct}%)
			</div>
		</div>
	)
}

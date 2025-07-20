import LeafIcon from '@/components/icons/LeafIcon'
import styles from './Header.module.scss'

const { header, logo, title } = styles

export default function Header() {
	return (
		<header className={header}>
			<div className={logo}>
				<LeafIcon />
			</div>
			<h1 className={title}>Leafy Todos</h1>
		</header>
	)
}

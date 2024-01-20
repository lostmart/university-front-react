import styles from "./navBar.module.scss"

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul>
				<li>Home</li>
				<li>Features</li>
			</ul>
		</nav>
	)
}

export default NavBar

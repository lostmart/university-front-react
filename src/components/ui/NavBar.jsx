import { NavLink } from "react-router-dom"
import styles from "./navBar.module.scss"

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="./#features">Features</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar

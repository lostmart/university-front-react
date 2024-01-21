import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "../../assets/img/favicons/android-chrome-192x192.png"

import styles from "./headerComp.module.scss"

const HeaderComp = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="horizon university logo" />
			<NavBar />
			<div>
				<NavLink to="/" className="btn">Login</NavLink>
				<NavLink to="/">Sign-up</NavLink>

			</div>
		</header>
	)
}

export default HeaderComp

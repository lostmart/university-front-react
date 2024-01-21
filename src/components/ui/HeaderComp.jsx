import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "../../assets/img/favicons/android-chrome-192x192.png"

import styles from "./headerComp.module.scss"

const HeaderComp = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="horizon university logo" />
			<NavBar />
			<div className={styles.logIn}>
				<NavLink to="/" className="btn btn-primary-outline">
					Login
				</NavLink>
				<NavLink to="/" className="btn btn-primary">
					Sign-up
				</NavLink>
			</div>
			<div className={styles.navToggler}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	)
}

export default HeaderComp

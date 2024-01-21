import { useState } from "react"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "../../assets/img/favicons/android-chrome-192x192.png"

import styles from "./headerComp.module.scss"

const HeaderComp = () => {
	const [showMenuBar, setShowMenuBar] = useState(false)

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
			<button
				type="button"
				onClick={() => setShowMenuBar(true)}
				aria-label="Toggle menu navigation"
				className={styles.navToggler}
			>
				<span className={showMenuBar ? "rotate-first" : ""}></span>
				<span className={showMenuBar ? "rotate-second" : ""}></span>
				<span className={showMenuBar ? "rotate-third" : ""}></span>
			</button>
		</header>
	)
}

export default HeaderComp

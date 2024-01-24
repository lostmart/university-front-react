import { useState } from "react"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "../../assets/img/logo.png"

import styles from "./HeaderComp.module.scss"
import NavFull from "./NavFull"

const HeaderComp = () => {
	const [showMenuBar, setShowMenuBar] = useState(false)

	return (
		<header className={styles.header}>
			<img src={logo} alt="horizon university logo" />
			<NavBar />
			<div className={styles.logIn}>
				<NavLink
					to="/"
					className="btn btn-primary-outline"
					style={{ width: "82px" }}
				>
					Login
				</NavLink>
				<NavLink to="/" className="btn btn-primary">
					Sign-up
				</NavLink>
			</div>
			<button
				type="button"
				onClick={() => setShowMenuBar(!showMenuBar)}
				aria-label="Toggle menu navigation"
				className={styles.navToggler}
			>
				<span className={showMenuBar ? "rotate-first" : ""}></span>
				<span className={showMenuBar ? "rotate-second" : ""}></span>
				<span className={showMenuBar ? "rotate-third" : ""}></span>
			</button>
			<NavFull showMenuBar={showMenuBar} />
		</header>
	)
}

export default HeaderComp

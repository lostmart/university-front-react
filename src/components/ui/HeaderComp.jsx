import logo from "../../assets/img/favicons/android-chrome-192x192.png"
import NavBar from "./NavBar"

import styles from "./headerComp.module.scss"

const HeaderComp = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="horizon university logo" />
			<NavBar />
			<div>
				<button>Login</button>
				<button>Sign-up</button>
			</div>
		</header>
	)
}

export default HeaderComp

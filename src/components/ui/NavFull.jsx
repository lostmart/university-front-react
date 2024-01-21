import styles from "./NavFull.module.scss"
import { NavLink } from "react-router-dom"

const NavFull = ({ showMenuBar }) => {
	return (
		<div
			className={styles.navFull}
			style={{ display: showMenuBar ? "flex" : "none" }}
		>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="./#features">Features</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className="btn btn-primary-outline"
						style={{ width: "82px" }}
					>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to="/" className="btn btn-primary">
						Sign-up
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default NavFull

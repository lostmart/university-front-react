import styles from "./NavFull.module.scss"
import { NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.png"

type NavFullProps = {
	showMenuBar?: React.CSSProperties
}

const NavFull = ({ showMenuBar }: NavFullProps) => {
	return (
		<div
			className={styles.navFull}
			style={{
				transform: showMenuBar ? "translateY(0)" : "translateY(-100%)",
				opacity: showMenuBar ? "1" : "0",
			}}
		>
			<ul>
				<img src={logo} alt="horizon university logo" />
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="./#features">Features</NavLink>
				</li>
				<li>
					<NavLink
						to="/logIn"
						className="btn btn-primary-outline"
						style={{ width: "82px" }}
					>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to="/signUp" className="btn btn-primary">
						Sign-up
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default NavFull

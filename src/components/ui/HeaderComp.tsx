import { useState } from "react"
import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "../../assets/img/logo.png"

const HeaderComp = () => {
	return (
		<header>
			<NavLink to="/">
				<img src={logo} alt="horizon university logo" />
			</NavLink>
			<NavBar />
		</header>
	)
}

export default HeaderComp

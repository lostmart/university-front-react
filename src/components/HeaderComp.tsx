import { Link } from "react-router-dom"
//import { useUserContext } from "../context/UserContext"
import { useContext } from "react"
import { LoginContext } from "../App"

const HeaderComp = (): JSX.Element => {
	const [loggedIn, setLoggedIn] = useContext(LoginContext)
	console.log(loggedIn)

	return (
		<header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
			<button onClick={() => setLoggedIn(false)}>logout</button>
			<Link
				to="/"
				className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
			>
				<img
					src="./img/favicons/android-chrome-192x192.png"
					alt="horizon university"
					className="university_icon"
				/>
			</Link>

			<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-light">
				<li>
					<Link to="/" className="nav-link px-2 link-light">
						Home
					</Link>
				</li>
				<li>
					{/* review page link with animations  */}
					<a href="/#features" className="nav-link px-2 link-light">
						Features
					</a>
				</li>
				<li>
					<Link to="/about" className="nav-link px-2 link-light">
						About
					</Link>
				</li>
			</ul>
			{!loggedIn ? (
				<div className="col-md-3 text-end login-section">
					<Link to="/logIn" className="btn btn-outline-primary me-2">
						Login
					</Link>
					<Link to="/signUp" className="btn btn-primary">
						Sign-up
					</Link>
				</div>
			) : (
				<div>you 're all set !!</div>
			)}
		</header>
	)
}

export default HeaderComp

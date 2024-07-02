import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const HeaderComp = (): JSX.Element => {
	const { user } = useContext(UserContext)
	console.log(user.logged)

	return (
		<header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
			{/* <button onClick={() => setLoggedIn(!loggedIn)}>logout</button> */}
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

			<div className="col-md-3 text-end login-section">
				{user.logged ? (
					<Link to="/profile" className="btn btn-primary me-2 avatar-pic">
						Profile
						<img
							src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
							alt="profile pic"
						/>
					</Link>
				) : (
					<>
						<Link to="/logIn" className="btn btn-outline-primary me-2">
							Login
						</Link>
						<Link to="/signUp" className="btn btn-primary">
							Sign-up
						</Link>
					</>
				)}
			</div>
		</header>
	)
}

export default HeaderComp

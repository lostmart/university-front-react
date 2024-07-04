import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"

import { useIsAuthenticated } from "../hooks/useIsAuthenticated"

const ProfilePage = () => {
	useIsAuthenticated()

	const navigate = useNavigate()

	// empty valued user
	const initialUser = {
		username: "Guest",
		logged: false,
	}

	const { user, setUser } = useContext(UserContext)

	useEffect(() => {
		if (!user.logged) {
			navigate("/")
		}
	}, [user, navigate])

	return (
		<main className="container">
			<h2>Profile page</h2>
			{user && (
				<section>
					<h3>
						{user.firstName} {user.lastName}
					</h3>
					<img src={user.image} alt={user.username} />
					<p> {user.username}</p>
				</section>
			)}
			<button
				className="btn btn-primary"
				onClick={() => {
					navigate("/")
					sessionStorage.clear()
					return setUser(initialUser)
				}}
			>
				log out
			</button>
		</main>
	)
}

export default ProfilePage

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
			<section className="profile_section p-4">
				<h2>Profile page</h2>
				<div className="row">
					<article className="col-sm-6 position-relative my-5 text-center rounded-2">
						{user && (
							<>
								<img
									className="profile-pic"
									src={user.image}
									alt={user.username}
								/>
								<h3 style={{ marginTop: "100px" }}>
									{user.firstName} {user.lastName}
								</h3>
								<p> {user.username}</p>
							</>
						)}
					</article>
					<article className="col-sm-4 rounded-2">
						<h3>Courses</h3>
					</article>
				</div>
			</section>
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

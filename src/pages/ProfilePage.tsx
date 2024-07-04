import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"

const ProfilePage = () => {
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

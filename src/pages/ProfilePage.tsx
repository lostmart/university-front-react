import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ProfilePage = () => {
	const navigate = useNavigate()

	// empty valued user
	const initialUser = {
		username: "Guest",
		logged: false,
	}

	const { setUser } = useContext(UserContext)

	// useEffect(() => {
	// 	if (!loggedIn) {
	// 		navigate("/")
	// 	}
	// }, [loggedIn, navigate])

	return (
		<main className="container">
			<h2>Profile page</h2>
			<button
				className="btn btn-primary"
				onClick={() => {
					navigate("/")
					return setUser(initialUser)
				}}
			>
				log out
			</button>
		</main>
	)
}

export default ProfilePage

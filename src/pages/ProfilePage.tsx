import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// context
import { LoginContext } from "../context/UserContext"
import { TAppContext } from "../context/UserContext"

const ProfilePage = () => {
	const navigate = useNavigate()

	const { loggedIn, setLoggedIn } = useContext<TAppContext>(LoginContext)

	useEffect(() => {
		if (!loggedIn) {
			navigate("/")
		}
	}, [loggedIn, navigate])

	return (
		<main className="container">
			<h2>Profile page</h2>
			<button
				className="btn btn-primary"
				onClick={() => {
					return setLoggedIn(false)
				}}
			>
				log out
			</button>
		</main>
	)
}

export default ProfilePage

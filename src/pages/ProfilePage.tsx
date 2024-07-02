import { useNavigate } from "react-router-dom"



const ProfilePage = () => {
	// const navigate = useNavigate()


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
					return setLoggedIn(false)
				}}
			>
				log out
			</button>
		</main>
	)
}

export default ProfilePage

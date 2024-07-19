import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { useContext, useEffect } from "react"
import HeaderComp from "./components/HeaderComp"
import FooterComp from "./components/FooterComp"
import "./assets/css/bootstrap.min.css" // custom bootstrap css min
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./assets/css/carousel.css"
import "./assets/css/signUp.css"
import "./styles.scss"

// Components
// import NavBar from "./components/ui/NavBar"

// Pages
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import ProfilePage from "./pages/ProfilePage"
import ContactPage from "./pages/ContactPage"

// Auth
//import { isAuthenticated } from "./utils/Auth"

// import { TFullUser } from "./types/User"

// contextProvider
import UserProvider from "./context/UserContext"
// import { UserContext } from "./context/UserContext"

// const getErrorMessage = (error: unknown): string => {
// 	let message: string

// 	if (error instanceof Error) {
// 		message = error.message
// 	} else if (error && typeof error === "object" && "message" in error) {
// 		message = String(error.message)
// 	} else if (typeof error === "string") {
// 		message = error
// 	} else {
// 		message = "Unknown Error...git status"
// 	}

// 	return message
// }

// const authUser = async (token: string): Promise<TFullUser | Error> => {
// 	const API_AUTH_USER = "https://dummyjson.com/user/me"

// 	/* providing token in bearer */
// 	try {
// 		const res = await fetch(API_AUTH_USER, {
// 			method: "GET",
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 		const userData: TFullUser = await res.json()
// 		return userData
// 		// setUser((prev) => ({
// 		//     ...prev
// 		// }))
// 	} catch (error) {
// 		console.log(error)
// 		return new Error(getErrorMessage(error))
// 	}
// }

function App() {
	// const { user, setUser } = useContext(UserContext)

	// const isAuthenticated = async () => {
	// 	const token = sessionStorage.getItem("token")

	// 	// if no token in sessionStorage stop here
	// 	if (!token) {
	// 		// console.log("no token !!")
	// 		return false
	// 	} else {
	// 		console.log(await authUser(token))

	// 		if (await authUser(token)) {
	// 			console.log("logged in !!")

	// 			setUser((prev) => ({
	// 				...prev,
	// 				//...authUser(token),
	// 				logged: true,
	// 			}))
	// 		} else {
	// 			return false
	// 		}
	// 	}
	// }

	return (
		<UserProvider>
			<Router>
				<div className="container">
					<HeaderComp />
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/contact/:id" element={<ContactPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<div className="container">
					<FooterComp />
				</div>
			</Router>
		</UserProvider>
	)
}

export default App

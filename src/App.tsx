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

// contextProvider
import UserProvider from "./context/UserContext"
import { useEffect, useState } from "react"
import { userApi } from "./services/authService"

function App() {
	const [apiStatus, setApiStatus] = useState<"checking" | "online" | "offline">(
		"checking"
	)

	useEffect(() => {
		// Health check on app mount
		const checkAPIHealth = async () => {
			try {
				const health = await userApi.healthCheck()
				console.log("✅ API Health Check:", health)
				setApiStatus("online")
			} catch (error) {
				console.error("❌ API Health Check Failed:", error)
				setApiStatus("offline")
			}
		}

		checkAPIHealth()

		// Optional: Check health every 5 minutes
		const interval = setInterval(checkAPIHealth, 5 * 60 * 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<UserProvider>
			<Router>
				{/* API Status Indicator (optional - can be removed) */}
				{apiStatus === "offline" && (
					<div
						className="alert alert-danger text-center mb-0"
						role="alert"
						style={{ borderRadius: 0 }}
					>
						⚠️ Authentication service is currently unavailable. Please try again
						later.
					</div>
				)}
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

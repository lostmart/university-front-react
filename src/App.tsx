import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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

// contextProvider
import UserProvider from "./context/UserContext"

function App() {
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
